function Section({ children, title }) {
  return (
    <section className="px-10 text-gray-50 text-3xl font-semibold flex flex-col gap-8 mt-10">
      <div id="section-header" className="flex justify-between">
        <h2>{title}</h2>
        <select
          className="text-gray-50 w-28 text-sm bg-transparent border-1 border-green-gator rounded-full py-2 px-3"
          name=""
          id=""
        >
          <option value="">Algo</option>
        </select>
      </div>
      <div className="flex w-full md:gap-9 gap-x-5 gap-y-5">{children}</div>
    </section>
  );
}

export default Section;
