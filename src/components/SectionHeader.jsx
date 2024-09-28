
function SectionHeader({ sectionId, title }) {
  return (
    <div
      id={sectionId}
      className="flex flex-col justify-center items-center mt-2"
    >
      <div className="flex justify-center text-3xl md:text-4xl mb-3">
        {title}
      </div>
      <div className="w-20 p-0.5 bg-primary mb-10" />
    </div>
  );
}

export default SectionHeader;
