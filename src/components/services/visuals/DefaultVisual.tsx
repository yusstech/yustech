
interface DefaultVisualProps {
  title: string;
}

const DefaultVisual = ({ title }: DefaultVisualProps) => {
  return (
    <div className="h-48 mb-4 bg-brand-purple/10 rounded-lg border border-brand-purple/20 flex items-center justify-center">
      <span className="text-lg gradient-text">{title}</span>
    </div>
  );
};

export default DefaultVisual;
