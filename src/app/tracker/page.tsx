import Header from "@/components/ui/Header";

export default function Tracker() {
    return (
        <div>
            <Header>Job Application Tracker</Header>
            <div className="flex w-full justify-between space-x-2">
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Company</div>
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Position</div>
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Location</div>
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Compensation</div>
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Application Date</div>
                <div className="flex w-1/6 justify-center px-4 py-2 bg-accent rounded-lg text-background">Status</div>
            </div>
        </div>
    );
}
