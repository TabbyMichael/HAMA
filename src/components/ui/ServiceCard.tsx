import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function ServiceCard({ icon, title, description, className = '' }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 text-orange-600">{icon}</div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );
}
