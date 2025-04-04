export default function ExprienceCard({ exp }) {
  return (
    <div className="w-full max-w-[550px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold underline decoration-blue-500 decoration-4">
            {exp.company}
          </h2>
          {exp.position && <p>({exp.position})</p>}
        </div>

        <span className="italic text-sm">{exp.timeline}</span>
      </div>
      <div className="flex gap-5 flex-col">
        {exp.description.map((data, idx) => (
          <p key={idx}>{data}</p>
        ))}
      </div>
    </div>
  );
}
