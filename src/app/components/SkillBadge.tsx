interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: 'primary' | 'secondary';
  label?: string;
}

export function SkillBadge({ name, icon, level = 'primary', label }: SkillBadgeProps) {
  const isPrimary = level === 'primary';
  
  return (
    <div 
      className={`
        inline-flex items-center gap-2 px-4 py-2 bg-transparent rounded-full border transition-all duration-300 group cursor-default
        ${isPrimary 
          ? "border-[#A67B5B]/30 hover:border-[#A67B5B] hover:bg-[#A67B5B]/5 shadow-sm hover:shadow-md" 
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600"
        }
        hover:-translate-y-1 hover:scale-[1.02]
      `}
    >
      {icon && (
        <span 
          className={`transition-opacity duration-200 ${isPrimary ? "text-[#A67B5B] opacity-80 group-hover:opacity-100" : "text-gray-400 opacity-60 group-hover:opacity-80"}`}
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col">
        <span 
          className={`text-[15px] leading-tight font-sans tracking-wide ${isPrimary ? "font-medium text-gray-800" : "font-normal text-gray-600"}`}
        >
          {name}
        </span>
        {label && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#A67B5B]/60 group-hover:text-[#A67B5B]/80 transition-colors">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
