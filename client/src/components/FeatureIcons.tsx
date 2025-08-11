import { Shield, Zap, Smartphone } from "lucide-react";

export default function FeatureIcons() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Files are automatically deleted after 1 hour",
      colorClass: "feature-icon secure",
    },
    {
      icon: Zap,
      title: "Lightning Fast", 
      description: "Convert images in seconds with high quality",
      colorClass: "feature-icon fast",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices",
      colorClass: "feature-icon mobile",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className={feature.colorClass}>
            <feature.icon className="h-8 w-8" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
