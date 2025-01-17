type CaloriesDisplayProps = {
    calories: number;
    text: string;
  };
  
  export default function CaloriesDisplay({ calories, text }: CaloriesDisplayProps) {
    return (
      <p className="text-white font-semibold text-left">
        <span className="font-black text-5xl text-orange-600 block">
          {calories}
        </span>
        {text}
      </p>
    );
  }
  