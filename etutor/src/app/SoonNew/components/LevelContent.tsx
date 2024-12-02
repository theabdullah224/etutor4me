// app/SoonNew/components/LevelContent.tsx
const LevelContent = ({ text, hoverText }: { text: string; hoverText: string }) => {
    return (
      <div className='text-center p-8'>
        <p className='text-xl mb-4'>{text}</p>
        <p className='text-lg text-gray-500 hover:text-gray-800'>{hoverText}</p>
      </div>
    );
  };
  
  export default LevelContent;
  