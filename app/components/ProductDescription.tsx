import { DescriptionSection } from "../types/product";

type Props = {
  sections: DescriptionSection[];
};

export default function ProductDescription({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="mt-8 space-y-6 text-gray-700">
      {sections.map((section, index) => {
        // Paragraph with no content
        if (section.type === "paragraph" && !section.content.trim()) {
          return null;
        }

        // List with no items
        if (section.type === "list" && section.items.length === 0) {
          return null;
        }

        if (section.type === "paragraph") {
          return (
            <div key={index} className="space-y-2">
              {section.title && (
                <h4 className="font-semibold text-gray-900">{section.title}</h4>
              )}
              <p className="leading-relaxed">{section.content}</p>
            </div>
          );
        }

        if (section.type === "list") {
          return (
            <div key={index} className="space-y-2">
              {section.title && (
                <h4 className="font-semibold text-gray-900">{section.title}</h4>
              )}
              <ul className="list-disc pl-5 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
