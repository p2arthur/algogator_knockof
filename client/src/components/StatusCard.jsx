function StatusCard({ title, data }) {
  return (
    <div className="h-32 md:h-36 w-full bg-slate-900 rounded-xl flex flex-col justify-between items-start p-5 py-7 border-2 border-transparent hover:border-1 hover:border-green-gator hover:scale-105 transition-all ">
      <h3 className="font-thin text-xs">{title}</h3>
      <p className="text-xl lg:text-3xl">{data}</p>
    </div>
  );
}
export default StatusCard;
