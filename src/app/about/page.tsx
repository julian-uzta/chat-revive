export default function HomePage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-8">
        <div className="w-2/5 mt-4">
            <h1 className="text-2xl font-bold text-center my-4">About</h1>
            <div className="mt-8">
                <h2 className="text-xl font-bold my-2">How It Works: </h2>
                <p>
                    ChatRevive utilizes advanced algorithms to scan your device for WhatsApp data that may have been deleted or lost due to various reasons such as accidental deletion, device malfunction, or software updates. Once identified, our application meticulously reconstructs these messages, restoring them to their original context and format.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold my-2">Motivation:</h2>
                <p>
                    The motivation behind ChatRevive stems from the recognition of the profound significance of digital communication in modern life. WhatsApp has become a primary platform for personal and professional interactions, serving as a repository for cherished memories, important information, and valuable conversations. Losing access to these messages can be distressing and frustrating, which is why we are committed to providing a solution that empowers users to reclaim their digital histories.
                </p>
            </div>
        </div>
    </div>
  );
}
