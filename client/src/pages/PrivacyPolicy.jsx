import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-6xl mx-auto animate-fade-in">
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Chitrakaar.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Personal Information</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Artist Name:</strong> When you create and share images, we collect the artist name you provide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Usage Data:</strong> We collect information about how you interact with our service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Device Information:</strong> IP address, browser type, and device information for security and analytics</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Generated Content</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Text Prompts:</strong> The descriptions you provide for image generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Generated Images:</strong> AI-generated images created from your prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Metadata:</strong> Creation date, generation parameters, and sharing preferences</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              How We Use Your Information
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>We use the collected information for the following purposes:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Service Provision:</strong> To generate AI images based on your prompts using Stable Diffusion technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Community Features:</strong> To display your shared artworks in the community gallery with your chosen artist name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Service Improvement:</strong> To analyze usage patterns and improve our AI image generation capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Security:</strong> To detect and prevent abuse, fraud, or unauthorized access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              Third-Party Services
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>We use the following third-party services to provide our functionality:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🤗 Hugging Face</h4>
                  <p className="text-sm">We use Hugging Face's API to access the Stable Diffusion model for AI image generation. Your prompts are processed by their servers.</p>
                  <a href="https://huggingface.co/privacy" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">View their privacy policy</a>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">☁️ Cloudinary</h4>
                  <p className="text-sm">We use Cloudinary for image storage and optimization. Your generated images are stored on their secure servers.</p>
                  <a href="https://cloudinary.com/privacy" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">View their privacy policy</a>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🗄️ MongoDB</h4>
                  <p className="text-sm">We use MongoDB Atlas for secure database services to store your artwork metadata and user information.</p>
                  <a href="https://www.mongodb.com/legal/privacy-policy" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">View their privacy policy</a>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🚀 Render</h4>
                  <p className="text-sm">We use Render for hosting our backend services. Server logs may be collected for operational purposes.</p>
                  <a href="https://render.com/privacy" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">View their privacy policy</a>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              Information Sharing
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="font-medium">We do not sell or rent your personal information to third parties.</p>
              <p>We may share information in the following circumstances:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Public Gallery:</strong> When you choose to share your artwork, it becomes publicly visible with your chosen artist name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> If required by law or to respond to legal process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Service Providers:</strong> With third-party services mentioned above to provide our functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Safety and Security:</strong> To protect the rights, property, or safety of our users or the public</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              Data Security
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Encryption:</strong> Data transmission is secured using HTTPS/TLS encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Access Control:</strong> Limited access to personal information on a need-to-know basis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Regular Updates:</strong> Security measures are regularly reviewed and updated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Secure Infrastructure:</strong> Our third-party service providers maintain industry-standard security practices</span>
                </li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Important:</strong> While we implement security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              Your Rights and Choices
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>You have the following rights regarding your information:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Access</h4>
                  <p className="text-sm">You can request access to your personal information and generated content.</p>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Correction</h4>
                  <p className="text-sm">You can request correction of inaccurate or incomplete information.</p>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Deletion</h4>
                  <p className="text-sm">You can request deletion of your personal information and generated content.</p>
                </div>
                <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Portability</h4>
                  <p className="text-sm">You can request a copy of your data in a machine-readable format.</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>To exercise your rights:</strong> Contact us at <a href="mailto:privacy@chitrakaar.com" className="underline">privacy@chitrakaar.com</a> with your request.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Cookies and Local Storage
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>We use the following technologies to enhance your experience:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Local Storage:</strong> To remember your theme preferences (dark/light mode)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Session Data:</strong> To maintain your session and improve performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Analytics:</strong> We may use analytics to understand usage patterns (anonymized data only)</span>
                </li>
              </ul>
              <p className="text-sm">You can control these through your browser settings, but some features may not work properly if disabled.</p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              Children's Privacy
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided personal information, please contact us immediately.
              </p>
              <p>
                If we discover we have collected personal information from a child under 13, we will 
                delete such information from our systems promptly.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              Changes to This Policy
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Posting the new Privacy Policy on this page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Updating the "Last updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Providing prominent notice on our website for significant changes</span>
                </li>
              </ul>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Contact Us
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Email</h4>
                    <p className="text-sm">
                      <a href="mailto:privacy@chitrakaar.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        privacy@chitrakaar.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Website</h4>
                    <p className="text-sm">
                      <a href="https://chitrakaar.onrender.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        chitrakaar.onrender.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
