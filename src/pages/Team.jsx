import TeamCard from "../components/cards/TeamCard";

export default function Team() {
    return (
        <section class="flex justify-center bg-secondary text-white">
            <div class="flex flex-col items-center w-9/12 pt-16 pb-24">
                <h2 class="font-bold text-center mb-10 text-5xl">Team</h2>
                <div class="flex flex-wrap justify-center gap-y-20 h-full">
                    <TeamCard />
                </div>
            </div>
        </section>
    )
};
