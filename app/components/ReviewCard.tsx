interface Reply {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

interface ReviewCardProps {
  name: string;
  message: string;
  replies?: Reply[];
}

export default function ReviewCard({ name, message, replies = [] }: ReviewCardProps) {
  const adminReply = replies[0]; // On prend la première réponse (il ne devrait y en avoir qu'une)

  return (
    <>
    
    <div className="space-y-1 pb-[20px] border-b-[1px] border-solid border-[#DADADA] w-full">
      <h3 className="text-[14px] font-semibold leading-[120%] tracking-[-1%]">{name}</h3>
      <p className="text-[14px] leading-[150%]">{message}</p>
      {adminReply && (
        <div className="mt-2 ml-4 py-2 pr-3 space-y-1">
            <span className="text-[14px] font-bold text-[#FF2727] tracking-wide">
              Réponse
            </span>
          <p className="text-[13px] leading-[150%] text-[#3D4C5E]">{adminReply.message}</p>
        </div>
      )}
    </div>
    </>
  );
}