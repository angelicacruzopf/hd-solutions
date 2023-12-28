import TeamCard from "../components/cards/TeamCard";

export default function Team() {
    return (
        <section id="departamentos" class="flex justify-center bg-secondary text-white">
            <div class="flex flex-col items-center w-[90%] md:w-9/12 pt-16 pb-24 max-w-[1000px]">
                <h2 class="font-bold text-center mb-10 text-2xl md:text-5xl">Departamentos</h2>
                <div class="flex flex-wrap justify-evenly sm:justify-center md:justify-evenly gap-x-2 md:gap-x-16 gap-y-20 h-full">
                    <TeamCard />
                </div>
            </div>
        </section>
    )
};
