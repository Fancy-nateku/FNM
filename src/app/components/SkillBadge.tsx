interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      {icon && <span className="text-gray-700">{icon}</span>}
      <span className="text-sm font-medium text-gray-900">{name}</span>
    </div>
  );
}
