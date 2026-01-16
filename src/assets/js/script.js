let countries = [];
fetch("geo/countries.json")
    .then((res) => res.json())
    .then((data) => {
        countries = data;
        world.pointsData(countries);
    });

let autoRotate = true;
var defaultGlobe = "images/earth_daymap.webp";
const world = Globe()(document.getElementById("globeViz"))
    .globeImageUrl(defaultGlobe)
    .bumpImageUrl("images/earth_topology.webp")
    .backgroundImageUrl("images/night_sky.webp")
    .pointsData(countries)
    .pointLat((d) => d.lat)
    .atmosphereColor(planetShadowColorFromUrl(defaultGlobe)) // blue glow
    .pointLng((d) => d.lng)
    .pointAltitude(0.01)
    .pointRadius(0.5)
    .pointColor(() => "rgba(255, 0, 0, 0.7)") // Semi-transparent red
    .pointLabel(
        (d) =>
            `<div class="flag-label" style="background-image: url('https://flagcdn.com/h80/${d.code.toLowerCase()}.png'); width: 40px; height: 30px; background-size: cover; border-radius: 4px;"></div> ${
                d.name
            }`
    )
    .onPointClick((d) => {
        focusOnCountry(d.lat, d.lng);
    });
// Auto-rotation controls
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;
function getPlanetCodeFromUrl(url) {
    return url
        .split("/") // remove path
        .pop() // earth_daymap.webp
        .replace(".webp", "") // earth_daymap
        .replace("earth_daymap", "earth")
        .replace("earth_night", "earth")
        .replace("earth_dark", "earth_dark")
        .replace("earth_topology", "earth_topology");
}

function planetShadowColorFromUrl(imageUrl) {
    const code = getPlanetCodeFromUrl(imageUrl);

    switch (code) {
        case "moon":
        case "earth_clouds":
        case "mercury":
            return "rgba(255, 255, 255, 0.5)"; // white

        case "earth_dark":
        case "earth_topology":
        case "jupiter":
            return "rgba(128, 128, 128, 0.5)"; // grey

        case "sun":
        case "mars":
            return "red";

        case "venus_surface":
            return "orange";

        case "venus_atmosphere":
        case "saturn":
            return "rgba(255, 255, 0, 0.5)"; // yellow

        default:
            return "blue";
    }
}

// Fetch GeoJSON for polygons
fetch("geo/ne_110m_admin_0_countries.geojson")
    .then((res) => res.json())
    .then((countriesGeoJson) => {
        world
            .polygonsData(countriesGeoJson.features)
            .polygonAltitude(0.005)
            .polygonCapColor((d) =>
                d === world.highlightedCountry
                    ? "rgba(0, 200, 255, 0.3)"
                    : "rgba(0,0,0,0)"
            )
            .polygonSideColor(() => "rgba(0,0,0,0)")
            .polygonStrokeColor(() => "#111")
            .polygonLabel(
                ({ properties: d }) => `
            <div style="background: rgba(0,0,0,0.8); padding: 8px; border-radius: 4px; color: white;">
                <b>${d.NAME}</b> <br />
                Population: ${d.POP_EST ? d.POP_EST.toLocaleString() : "N/A"}
            </div>
          `
            )
            .onPolygonHover((hoverD) => {
                world.controls().autoRotate = !hoverD && autoRotate; // Pause on hover
                world.polygonCapColor((d) =>
                    d === hoverD ? "rgba(0, 200, 255, 0.3)" : "rgba(0,0,0,0)"
                );
            })
            .onPolygonClick((d) => {
                autoRotate = false;
                world.controls().autoRotate = false;
                world.highlightedCountry = d;
                updateStats(d.properties);
            });
    });

function updateStats(properties) {
    const infoCard = document.getElementById("info-card");
    const { NAME, ISO_A2, POP_EST } = properties;

    infoCard.innerHTML = `
            <h2>${NAME}</h2>
            <p><span class="stat-label">Population:</span> <span class="stat-value">${
                POP_EST ? POP_EST.toLocaleString() : "Loading..."
            }</span></p>
            <p><span class="stat-label">Code:</span> <span class="stat-value">${ISO_A2}</span></p>
            <p id="area-stat"><span class="stat-label">Area:</span> <span class="stat-value">Loading...</span></p>
        `;

    if (ISO_A2) {
        fetch(`https://restcountries.com/v3.1/alpha/${ISO_A2}`)
            .then((res) => res.json())
            .then((data) => {
                const countryData = data[0];
                if (countryData && countryData.area) {
                    const areaStr = countryData.area.toLocaleString() + " km²";
                    document.getElementById(
                        "area-stat"
                    ).innerHTML = `<span class="stat-label">Area:</span> <span class="stat-value">${areaStr}</span>`;
                }
            })
            .catch((err) => {
                console.error("Error fetching country details:", err);
                document.getElementById(
                    "area-stat"
                ).innerHTML = `<span class="stat-label">Area:</span> <span class="stat-value">N/A</span>`;
            });
    } else {
        document.getElementById(
            "area-stat"
        ).innerHTML = `<span class="stat-label">Area:</span> <span class="stat-value">N/A</span>`;
    }
}

let planetData = {};

fetch("planets/en.json")
    .then((res) => {
        if (!res.ok) throw new Error("Failed to load planet data");
        return res.json();
    })
    .then((data) => {
        planetData = data;
    })
    .catch((err) => {
        console.error("Planet data error:", err);
    });

let currentPlanet = "earth";
let storedPolygons = [];

document.getElementById("globe-theme").addEventListener("change", (e) => {
    const url = e.target.value;
    const text = e.target.options[e.target.selectedIndex].text.toLowerCase();
    world.globeImageUrl(url);
    const glowColor = planetShadowColorFromUrl(url);
    world.atmosphereColor(glowColor);
    let newPlanet = "earth"; // default
    if (text.includes("moon")) newPlanet = "moon";
    else if (text.includes("mars")) newPlanet = "mars";
    else if (text.includes("jupiter")) newPlanet = "jupiter";
    else if (text.includes("mercury")) newPlanet = "mercury";
    else if (text.includes("neptune")) newPlanet = "neptune";
    else if (text.includes("saturn")) newPlanet = "saturn";
    else if (text.includes("sun")) newPlanet = "sun";
    else if (text.includes("uranus")) newPlanet = "uranus";
    else if (text.includes("venus")) newPlanet = "venus";
    else if (text.includes("earth")) newPlanet = "earth";

    currentPlanet = newPlanet;

    // Toggle Earth layers
    if (currentPlanet === "earth") {
        // Restore layers
        if (storedPolygons.length > 0) {
            world.polygonsData(storedPolygons);
            world.pointsData(countries);
        } else {
            // Should be already loaded or will be loaded by fetch
            // If switch back before initial fetch completes, it will handle itself
        }
    } else {
        world.polygonsData([]);
        world.pointsData([]);
    }
});

fetch("geo/ne_110m_admin_0_countries.geojson")
    .then((res) => res.json())
    .then((countriesGeoJson) => {
        storedPolygons = countriesGeoJson.features;
        if (currentPlanet === "earth") {
            world.polygonsData(countriesGeoJson.features);
        }

        // Re-apply styles/events since we might be calling polygonsData multiple times
        world
            .polygonAltitude(0.005)
            .polygonCapColor((d) =>
                d === world.highlightedCountry
                    ? "rgba(0, 200, 255, 0.3)"
                    : "rgba(0,0,0,0)"
            )
            .polygonSideColor(() => "rgba(0,0,0,0)")
            .polygonStrokeColor(() => "#111")
            .polygonLabel(
                ({ properties: d }) => `
            <div style="background: rgba(0,0,0,0.8); padding: 8px; border-radius: 4px; color: white;">
                <b>${d.NAME}</b> <br />
                Population: ${d.POP_EST ? d.POP_EST.toLocaleString() : "N/A"}
            </div>
          `
            )
            .onPolygonHover((hoverD) => {
                world.controls().autoRotate = !hoverD && autoRotate; // Pause on hover
                world.polygonCapColor((d) =>
                    d === hoverD ? "rgba(0, 200, 255, 0.3)" : "rgba(0,0,0,0)"
                );
            })
            .onPolygonClick((d) => {
                autoRotate = false;
                world.controls().autoRotate = false;
                world.highlightedCountry = d;
                updateStats(d.properties);
            });
    });

// --- Planet Info Modal ---
const modal = document.getElementById("planet-modal");
const showInfoBtn = document.getElementById("show-info-btn");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

showInfoBtn.addEventListener("click", () => {
    const data = planetData[currentPlanet];
    if (!data) {
        modalBody.innerHTML =
            "<p>No data available for this celestial body.</p>";
        modalTitle.innerText = currentPlanet.toUpperCase();
    } else {
        modalTitle.innerText =
            currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1);
        modalBody.innerHTML = `
                <p class="description">${data.description}</p>
                <div class="info-grid">
                    <div class="info-item"><span class="info-key">Diameter</span> ${
                        data.diameter
                    }</div>
                    <div class="info-item"><span class="info-key">Mass</span> ${
                        data.mass
                    }</div>
                    <div class="info-item"><span class="info-key">Gravity</span> ${
                        data.surfaceGravity
                    }</div>
                    <div class="info-item"><span class="info-key">Temp</span> ${
                        data.surfaceTemperature
                    }</div>
                    <div class="info-item"><span class="info-key">Orbital Period</span> ${
                        data.orbitalPeriod
                    }</div>
                    <div class="info-item"><span class="info-key">Rotation</span> ${
                        data.rotationPeriod
                    }</div>
                </div>
                <div class="info-item" style="margin-top: 10px;">
                    <span class="info-key">Atmosphere</span> 
                    ${
                        Array.isArray(data.atmosphereComposition)
                            ? data.atmosphereComposition.join(", ")
                            : data.atmosphereComposition || "N/A"
                    }
                </div>
                <div class="info-item" style="margin-top: 10px;">
                     <span class="info-key">Surface</span> ${
                         data.surfaceComposition || "N/A"
                     }
                </div>
             `;
    }
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close on outside click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// --- Zoom Controls ---
document.getElementById("zoom-in").addEventListener("click", () => {
    const currentAlt = world.pointOfView().altitude;
    world.pointOfView({ altitude: Math.max(0.1, currentAlt - 0.5) }, 500);
});

document.getElementById("zoom-out").addEventListener("click", () => {
    const currentAlt = world.pointOfView().altitude;
    world.pointOfView({ altitude: Math.min(10, currentAlt + 0.5) }, 500);
});
