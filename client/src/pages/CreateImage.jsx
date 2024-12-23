import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompts } from "../utils";
import { Loader, FormField } from "../components";

const CreateImage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImage(true);

        const response = await fetch(
          "https://chitrakaar.onrender.com/api/v1/generation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setForm({ ...form, photo: data.photo }); // Use Base64 image
        } else {
          alert(data.error || "An error occurred while generating the image.");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert("Please provide a prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch("https://chitrakaar.onrender.com/api/v1/image/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          await response.json();
          navigate("/"); // Navigate to home page on success
        } else {
          alert("Failed to share the image. Please try again.");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill the form correctly.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Generate</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Generate imaginative & visually stunning images created by using
          Stable Diffusion AI Model and share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., Amitabh Bachhan"
            value={form.name}
            handleChange={handleChange}
          />
          <div>
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A dragon resting on a mountain peak under a starry sky"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <p className="text-xs mt-2 ml-1 text-gray-600">
              {form.prompt.length} / 1000 characters
            </p>
          </div>

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-bl500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={form.photo || preview}
                alt={form.prompt || "Preview"}
                className="w-full h-full object-contain"
              />
            )}

            {generatingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 gap-5 flex">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImage ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have generated the image you want, you can share it with
            others in the community
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateImage;
