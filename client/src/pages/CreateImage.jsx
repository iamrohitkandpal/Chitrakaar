import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompts, addWatermark } from "../utils";
import { Loader, FormField } from "../components";
import { API_BASE_URL } from "../config";

const CreateImage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateImage = async () => {
    if (!form.prompt.trim()) {
      setError("Please provide a prompt to generate an image.");
      return;
    }

    try {
      setGeneratingImage(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/v1/generation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: form.prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        // Apply watermark to the generated image
        try {
          const watermarkedImage = await addWatermark(data.photo, {
            position: 'bottom-right',
            opacity: 0.6,
            scale: 0.08,
            margin: 15
          });
          setForm({ ...form, photo: watermarkedImage });
        } catch (watermarkError) {
          console.error('Error applying watermark:', watermarkError);
          // If watermark fails, use original image
          setForm({ ...form, photo: data.photo });
        }
      } else {
        setError(data.error || "An error occurred while generating the image.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.prompt.trim() || !form.photo) {
      setError("Please generate an image first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/v1/image/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        navigate("/");
      } else {
        setError("Failed to share the image. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
    setError("");
  };

  return (
    <section className="max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 bg-clip-text text-transparent mb-4">
          Create Amazing Art
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Transform your imagination into stunning visuals using the power of
          Stable Diffusion AI. Craft detailed prompts and watch your ideas come
          to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Preview Section */}
        <div className="order-1 lg:order-1">
          <div className="sticky top-24">
            <h3 className="font-semibold text-md mb-1 text-gray-900 dark:text-gray-100 ">
              Preview
            </h3>
            <div className="relative bg-white dark:bg-dark-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden group transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500">
              {form.photo ? (
                <div className="relative flex items-center justify-center w-full h-full max-w-md max-h-96">
                  <img
                    src={form.photo}
                    alt={form.prompt || "Generated artwork"}
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={preview}
                    alt="Preview placeholder"
                    className="w-32 h-32 mx-auto mb-4 opacity-50 dark:opacity-30"
                  />
                  <p className="text-gray-500 dark:text-gray-300 mb-2">
                    Your generated image will appear here
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">
                    Enter a prompt and click generate to create amazing art
                  </p>
                </div>
              )}

              {generatingImage && (
                <div className="absolute inset-0 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm flex items-center justify-center rounded-xl">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="order-2 lg:order-2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    {error}
                  </p>
                </div>
              </div>
            )}

            <FormField
              labelName="Artist Name"
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={form.name}
              handleChange={handleChange}
            />

            <div>
              <FormField
                labelName="Describe your vision"
                type="text"
                name="prompt"
                placeholder="A majestic dragon soaring through cotton candy clouds at sunset..."
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />
              <div className="flex items-center justify-between mt-2 text-xs">
                <span
                  className={`${
                    form.prompt.length > 800
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                >
                  {form.prompt.length} / 1000 characters
                </span>
                {form.prompt.length > 800 && (
                  <span className="text-orange-600 dark:text-orange-400">
                    Consider shortening for better results
                  </span>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <button
              type="button"
              onClick={generateImage}
              disabled={generatingImage || !form.prompt.trim()}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-500 dark:to-green-600 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
            >
              {generatingImage ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating your masterpiece...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Generate Image
                </div>
              )}
            </button>

            {/* Share Section */}
            {form.photo && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    🎉 Image Generated Successfully!
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Love your creation? Share it with the community or download
                    it to keep forever.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Share Button */}
                  <button
                    type="submit"
                    disabled={loading || !form.name.trim()}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sharing with community...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          />
                        </svg>
                        Share with Community
                      </div>
                    )}
                  </button>

                  {/* Download Button */}
                  <a
                    href={form.photo}
                    download={`chitrakaar-art-${Date.now()}.png`}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 dark:from-gray-500 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                        />
                      </svg>
                      Download Image
                    </div>
                  </a>
                </div>
              </div>
            )}
          </form>

          {/* Tips */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              💡 Pro Tips
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Be specific about colors, lighting, and mood</li>
              <li>
                • Include artistic styles (e.g., &quot;oil painting&quot;,
                &quot;digital art&quot;)
              </li>
              <li>
                • Mention composition details (e.g., &quot;close-up&quot;,
                &quot;wide angle&quot;)
              </li>
              <li>
                • Add quality modifiers (e.g., &quot;highly detailed&quot;,
                &quot;4K&quot;)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateImage;
