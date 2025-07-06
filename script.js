<script>
        // Mobile Menu Toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Fetch API Implementation (Simple Version)
        document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('places-container');
            container.innerHTML = '';
            
            // Gujarat destinations with custom descriptions
            const gujaratSpots = [
                {
                    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/opti/SOU-Banner.jpg",
                    name: "Statue of Unity",
                    desc: "World's tallest statue honoring Sardar Patel with museum and valley views."
                },
                {
                    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/Great-Rann-Of-Kutch-Banner.jpg",
                    name: "Rann of Kutch",
                    desc: "Vast white salt desert famous for its full moon festivals and crafts."
                },
                {
                    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/gir-national-park/Sasan-Gir-Banner.png",
                    name: "Gir National Park",
                    desc: "Only natural habitat of the majestic Asiatic lions in India."
                }
            ];
            
            data.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300';
                card.innerHTML = `
                    <img src="${gujaratSpots[index].image}" 
                         alt="${gujaratSpots[index].name}" 
                         class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">${gujaratSpots[index].name}</h3>
                        <p class="text-gray-600">${gujaratSpots[index].desc}</p>
                        <button class="mt-4 text-teal-600 font-semibold hover:text-teal-800">
                            Explore <i class="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('places-container').innerHTML = `
                <div class="col-span-3 text-center py-12 text-red-600">
                    <i class="fas fa-exclamation-triangle text-3xl mb-4"></i>
                    <p>Failed to load destinations. Showing sample Gujarat attractions...</p>
                    <!-- You can add the static Gujarat cards here as fallback -->
                </div>
            `;
        });
});
    </script>