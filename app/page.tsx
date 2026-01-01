import Link from "next/link";
import Image from "next/image";
import { Check, Zap } from "lucide-react";

export default function Home() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Get full access to all features during your trial. No credit card required. Cancel anytime during the trial period."
    },
    {
      question: "What makes Legistry AI unique?",
      answer: "Our multi-agent AI architecture combines specialized agents for contracts, compliance, vendors, analytics, and document intelligence - all working together seamlessly."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! We integrate with Slack, Salesforce, HubSpot, SendGrid, and more. Plus webhooks for custom integrations with any system."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. Bank-level encryption, SOC 2 Type II compliance (in progress), HIPAA-ready, and GDPR compliant."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most teams are up and running in under 30 minutes. Our AI agents are pre-trained and ready to use immediately."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support, priority support options, and dedicated success managers for enterprise customers."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Legistry AI" width={180} height={60} style={{ width: 'auto', height: 'auto', maxWidth: 180 }} priority />
          </div>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="px-8 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Legal Intelligence
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your AI Legal Team<br />
            <span className="text-blue-600">Automates Legal Work</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Transform your legal operations with specialized AI agents for contracts, compliance, vendor management, analytics, and document intelligence.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
            Draft contracts in 60 seconds • Reduce legal spend by 60-80% • Enterprise integrations included
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Free →
            </Link>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            ✓ No credit card required  ✓ Cancel anytime  ✓ Setup in 30 minutes
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600 dark:text-gray-400">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">60s</div>
            <div className="text-gray-600 dark:text-gray-400">Draft Contracts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">AI Available</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Legal Operations Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized AI agents handle your entire legal workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Contract Agent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI-powered contract lifecycle management from draft to signature.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Draft contracts in 60 seconds with AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI review with risk scoring (1-10 scale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Smart negotiation recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Built-in e-signature capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Compliance Agent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Real-time regulatory monitoring and automated policy management.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Monitor GDPR, CCPA, SOX, HIPAA updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Auto-generate compliance policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Deadline tracking and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Slack notifications for critical alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Vendor Agent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Streamline vendor onboarding and automate risk assessments.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Onboard vendors in 2 hours (vs 5 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI risk assessment (financial, security, compliance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Contract renewal tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Salesforce & HubSpot sync</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Analytics Agent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Predictive analytics and cost forecasting for legal operations.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Legal spend analysis and trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>6-12 month cost forecasting (85-90% accuracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cost-saving opportunity identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Executive dashboards and reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                AI Document Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Chat with your legal documents and get instant AI-powered answers.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Upload PDF, DOCX, TXT documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI-powered Q&A with citations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Conversation history tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>HIPAA-compliant document storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seamless Enterprise Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect with the tools your team already uses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Slack</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Real-time alerts and notifications for compliance deadlines and contract updates</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Salesforce</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sync vendor data and contract information with your CRM automatically</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">HubSpot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Keep your marketing and sales teams in sync with legal workflows</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">SendGrid</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automated email notifications for contract renewals and compliance alerts</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Plus <span className="font-semibold text-blue-600">Webhooks</span> for custom integrations with any system
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white" id="contact">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Legal Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Empower your legal team with AI-powered automation and intelligence
          </p>
          <a
            href="mailto:hello@legistry.ai"
            className="inline-block px-8 py-4 bg-white text-blue-600 text-lg rounded-lg hover:bg-gray-100 font-semibold shadow-xl transition-all"
          >
            Contact Us →
          </a>
          <p className="mt-4 text-sm opacity-75">
            No credit card required • Setup in 30 minutes • Cancel anytime
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20 border-t border-gray-200 dark:border-gray-700">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600">Features</a></li>
              <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="mailto:hello@legistry.ai" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms</a></li>
              <li><a href="#" className="hover:text-blue-600">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legistry AI</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI-powered legal operations platform for modern legal teams.
            </p>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p>© 2025 Legistry AI. Transform your legal team with AI agents.</p>
        </div>
      </footer>
    </div>
  );
}
