import React from "react";

const TermsOfService = () => {
  return (
    <section className="max-w-6xl mx-auto animate-fade-in">
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using Chitrakaar. By using our service, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {/* Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Acceptance of Terms
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                By accessing and using Chitrakaar ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our AI-powered image generation platform operated 
                by Chitrakaar ("us", "we", or "our"). The Service allows users to generate AI artwork using text prompts 
                and share them with the community.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Description of Service
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>Chitrakaar provides:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>AI Image Generation:</strong> Create artwork from text prompts using Stable Diffusion technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Community Gallery:</strong> Share and discover AI-generated artwork from other users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Creative Tools:</strong> Features like prompt suggestions, theme customization, and responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Free Access:</strong> Basic image generation and community features at no cost</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Beta Service:</strong> Chitrakaar is currently in beta. Features may change, and service availability is not guaranteed.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              User Responsibilities and Conduct
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Acceptable Use</h3>
                <p>You agree to use the Service responsibly and in compliance with all applicable laws. You may:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Generate artwork for personal, educational, or commercial use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Share your creations with the community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use generated images in your own projects and publications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Provide constructive feedback and participate in the community</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Prohibited Activities</h3>
                <p>You agree NOT to:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Generate, share, or promote content that is illegal, harmful, or offensive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Create content that infringes on intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Generate explicit, violent, or disturbing content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Attempt to reverse engineer, hack, or abuse the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Use the Service for spam, malware distribution, or other malicious activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Impersonate others or provide false information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Exceed reasonable usage limits or attempt to overload our systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content and Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Content and Intellectual Property
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Generated Content Ownership</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Your Rights:</strong> You retain ownership of the text prompts you provide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Generated Images:</strong> AI-generated images are considered your creative work for personal and commercial use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Community Sharing:</strong> By sharing in our gallery, you grant us a license to display your work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Attribution:</strong> When sharing, your chosen artist name will be displayed with the artwork</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Service Content</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Platform Ownership:</strong> Chitrakaar's interface, features, and branding remain our property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Third-Party Models:</strong> We use Stable Diffusion under appropriate licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Fair Use:</strong> You may not copy, modify, or distribute our platform's code or design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">Important Note on AI-Generated Content</h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  AI-generated images may occasionally resemble existing artworks or contain elements from the training data. 
                  While rare, users are responsible for ensuring their use complies with applicable copyright laws.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              Privacy and Data Handling
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Your privacy is important to us. Our data handling practices are detailed in our 
                <a href="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline mx-1">Privacy Policy</a>
                which forms part of these Terms.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Privacy Points</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We collect minimal personal information (artist name, usage data)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Your prompts and generated images may be processed by third-party AI services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Shared content becomes publicly visible in our community gallery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>You can request deletion of your data at any time</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Service Availability and Limitations
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Service Availability</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Best Effort:</strong> We strive to maintain 24/7 availability but cannot guarantee uptime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Maintenance:</strong> Planned maintenance may temporarily interrupt service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Third-Party Dependencies:</strong> Service depends on external AI models and cloud services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Usage Limits:</strong> We may implement rate limits to ensure fair access for all users</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Content Moderation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We reserve the right to remove content that violates our guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Some prompts may be filtered or blocked by our AI safety systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Community reports help us maintain a safe and creative environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimers and Limitations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              Disclaimers and Limitation of Liability
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Service Disclaimer</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    <strong>AS IS SERVICE:</strong> Chitrakaar is provided "as is" without warranties of any kind, 
                    either express or implied. We do not guarantee the accuracy, reliability, or suitability of generated content.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Limitation of Liability</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We are not liable for any indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Our total liability is limited to the amount paid for the service (currently $0)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Users are responsible for their use of generated content and any legal implications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We are not responsible for third-party services or external links</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">AI-Specific Disclaimers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>AI-generated content may not always reflect the intended prompt accurately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Generated images may occasionally contain unexpected or undesired elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>The AI model's training data may influence generated content in unpredictable ways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We cannot guarantee the uniqueness or originality of generated images</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Account Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              Termination and Suspension
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Termination by Users</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>You may stop using the Service at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Contact us to request deletion of your data and generated content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Some content may remain in our systems for legal or technical reasons</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Termination by Chitrakaar</h3>
                <p>We may suspend or terminate access to the Service if:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>You violate these Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>You engage in prohibited activities or abuse the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We need to comply with legal requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We decide to discontinue the Service (with reasonable notice)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              Changes to Terms
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                We may update these Terms of Service from time to time to reflect changes in our service, 
                legal requirements, or business practices.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Notification Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Minor changes: Updated terms will be posted on this page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Major changes: We will provide prominent notice on our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>The "Last updated" date will reflect when changes take effect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Continued use of the Service constitutes acceptance of updated terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              Governing Law and Disputes
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Governing Law</h3>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the 
                  jurisdiction where Chitrakaar operates, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Dispute Resolution</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Contact First:</strong> Please contact us directly to resolve any issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Good Faith:</strong> We will work in good faith to address your concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Legal Action:</strong> Any legal disputes will be resolved in appropriate courts</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Contact Information
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>If you have questions about these Terms of Service, please contact us:</p>
              
              <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">General Inquiries</h4>
                    <p className="text-sm">
                      <a href="mailto:support@chitrakaar.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        support@chitrakaar.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Legal Matters</h4>
                    <p className="text-sm">
                      <a href="mailto:legal@chitrakaar.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                        legal@chitrakaar.com
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

          {/* Final Agreement */}
          <section className="mb-10">
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-3">
                Agreement Acknowledgment
              </h3>
              <p className="text-sm text-primary-700 dark:text-primary-300">
                By using Chitrakaar, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms of Service and our Privacy Policy. If you do not agree with these terms, please discontinue 
                use of the Service.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
