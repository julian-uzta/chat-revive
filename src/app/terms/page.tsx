export default function HomePage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-8">
        <div className="w-2/5 mt-4">
            <h1 className="text-2xl font-bold text-center my-4">ChatRevive Terms & Conditions</h1>
            <div className="mt-8 mb-4">
                <p>
                    Welcome to ChatRevive! By using our application, you agree to adhere to the following terms and conditions:
                </p>
            </div>
            <div className="h-128 overflow-y-auto" style={{boxShadow: "inset 0 25px 25px -25px rgba(46, 52, 64, 0.05), inset 0 -25px 25px -25px rgba(46, 52, 64, 0.05)"}}>
                <div className="mt-8">
                    <p>
                        <span className="font-bold">1. Usage Restrictions:</span> ChatRevive is intended solely for the purpose of restoring WhatsApp messages on your personal devices. You agree not to use the application for any illegal, unauthorized, or unethical purposes.
                    </p>
                </div>
                <div className="mt-8">
                    <p>
                        <span className="font-bold">2. Data Privacy:</span> We respect your privacy and are committed to safeguarding your personal data. ChatRevive will only access and process WhatsApp data on your device for the purpose of message restoration. We do not store, transmit, or share your personal data with any third parties without your consent.
                    </p>
                </div>
                <div className="mt-8">
                    <p>
                        <span className="font-bold">3. Intellectual Property:</span> All content and materials provided by ChatRevive, including but not limited to software, algorithms, logos, and documentation, are protected by intellectual property laws. You agree not to reproduce, distribute, or modify any part of the application without prior written permission from ChatRevive.
                    </p>
                </div>   
                <div className="mt-8">
                    <p>
                        <span className="font-bold">4. Liability Limitation:</span> While we strive to provide accurate and reliable service, ChatRevive cannot guarantee the completeness or accuracy of restored WhatsApp messages. We are not liable for any damages, losses, or inconveniences resulting from the use of our application.
                    </p>
                </div>   
                <div className="mt-8">
                    <p>
                        <span className="font-bold">5. User Responsibilities:</span> You are solely responsible for the use of ChatRevive on your devices. You agree to indemnify and hold ChatRevive harmless from any claims, damages, or liabilities arising from your use of the application.
                    </p>
                </div>   
                <div className="mt-8">
                    <p>
                        <span className="font-bold">6. Modification of Terms:</span> ChatRevive reserves the right to modify these terms and conditions at any time. Updated terms will be posted on our website, and continued use of the application constitutes acceptance of the revised terms.
                    </p>
                </div>   
                <div className="mt-8">
                    <p>
                        <span className="font-bold">7. Governing Law:</span> These terms and conditions are governed by the laws of California. Any disputes arising from the use of ChatRevive shall be resolved through arbitration in accordance with the laws of California.
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p>
                    By using ChatRevive, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree with any part of these terms, please refrain from using the application.                    
                </p>
            </div>                                               
        </div>
    </div>
  );
}
