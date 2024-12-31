document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("flight-ticket-app");

  const createInfoItem = (label, value, isSmall = false) => {
    const container = document.createElement("div");
    container.className = "flex flex-col items-center";

    const labelSpan = document.createElement("span");
    labelSpan.className = "uppercase text-xs opacity-60 font-medium";
    labelSpan.textContent = label;

    const valueSpan = document.createElement("span");
    valueSpan.className = isSmall
      ? "font-medium text-sky-500 text-sm"
      : "text-lg font-medium";
    valueSpan.textContent = value;

    container.appendChild(labelSpan);
    container.appendChild(valueSpan);

    return container;
  };

  const createFlightDuration = (isSmall = false) => {
    const container = document.createElement("div");
    container.className = `flex ${isSmall ? "scale-75" : ""} gap-12 items-end`;

    const createLocationDiv = (code, time) => {
      const div = document.createElement("div");
      div.className = "flex flex-col items-center";

      const codeSpan = document.createElement("span");
      codeSpan.className = "text-sky-500 font-medium text-3xl";
      codeSpan.textContent = code;

      const timeSpan = document.createElement("span");
      timeSpan.className = "text-sm opacity-70";
      timeSpan.textContent = time;

      div.appendChild(codeSpan);
      div.appendChild(timeSpan);

      return div;
    };

    const flightPathDiv = document.createElement("div");
    flightPathDiv.className = "flex flex-col items-center gap-2 relative pb-6";

    const flightIcon = document.createElement("i");
    flightIcon.className = "fas fa-plane rotate-90 text-sky-500";

    const pathLine = document.createElement("div");
    pathLine.className = `w-28 h-12 border-t-2 border-dashed border-gray-950 absolute top-7
            after:content-[''] after:size-1.5 after:rounded-full after:bg-sky-500 after:block after:absolute after:top-3.5 after:-left-1
            before:content-[''] before:size-1.5 before:rounded-full before:bg-sky-500 before:block before:absolute before:top-3.5 before:-right-1`;

    const durationSpan = document.createElement("span");
    durationSpan.className = "text-sm opacity-70 mt-4";
    durationSpan.textContent = "8hr 10min";

    flightPathDiv.appendChild(flightIcon);
    flightPathDiv.appendChild(pathLine);
    flightPathDiv.appendChild(durationSpan);

    container.appendChild(createLocationDiv("NYC", "12.30AM"));
    container.appendChild(flightPathDiv);
    container.appendChild(createLocationDiv("ROM", "2.40PM"));

    return container;
  };

  const createFlightTicket = () => {
    const container = document.createElement("div");
    container.className = "flight-ticket-container";

    const desktopTicket = document.createElement("div");
    desktopTicket.className = "flight-ticket";

    const leftSection = document.createElement("div");
    leftSection.className = "flex flex-col items-center gap-4 flex-1";

    const flightDuration = createFlightDuration();
    leftSection.appendChild(flightDuration);

    const infoSection = document.createElement("div");
    infoSection.className =
      "bg-sky-200/70 flex justify-around py-5 px-4 rounded-2xl w-full";

    const infoItems = [
      ["full name", "John Doe"],
      ["seat number", "43C"],
      ["terminal", "3"],
      ["class", "Business"],
    ];

    infoItems.forEach(([label, value]) => {
      infoSection.appendChild(createInfoItem(label, value));
    });

    leftSection.appendChild(infoSection);
    desktopTicket.appendChild(leftSection);

    // Vertical divider
    const divider = document.createElement("div");
    divider.className =
      "self-stretch relative border-dashed border-l border-gray-950";

    const topDot = document.createElement("div");
    topDot.className =
      "bg-sky-300 size-8 -top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute";

    const bottomDot = document.createElement("div");
    bottomDot.className =
      "bg-sky-300 size-8 left-1/2 -translate-x-1/2 translate-y-1/2 -bottom-8 rounded-full absolute";

    divider.appendChild(topDot);
    divider.appendChild(bottomDot);
    desktopTicket.appendChild(divider);

    // Rotated section
    const rotatedSection = document.createElement("div");
    rotatedSection.className = "flex";

    const innerRotatedSection = document.createElement("div");
    innerRotatedSection.className = "flex flex-col -rotate-90";

    const smallFlightDuration = createFlightDuration(true);
    innerRotatedSection.appendChild(smallFlightDuration);

    const smallInfoContainer = document.createElement("div");
    smallInfoContainer.className = "flex justify-around w-full";

    const smallInfoItems = [
      ["departure", "12:30AM"],
      ["arrival", "2:40PM"],
      ["seat number", "43C"],
      ["ticket no.", "FFAED43"],
    ];

    smallInfoItems.forEach(([label, value]) => {
      smallInfoContainer.appendChild(createInfoItem(label, value, true));
    });

    innerRotatedSection.appendChild(smallInfoContainer);

    const blackBar = document.createElement("div");
    blackBar.className = "w-full mt-8 bg-black h-20";
    innerRotatedSection.appendChild(blackBar);

    rotatedSection.appendChild(innerRotatedSection);
    desktopTicket.appendChild(rotatedSection);

    container.appendChild(desktopTicket);

    // Mobile view
    const mobileView = document.createElement("div");
    mobileView.className = "lg:hidden flex flex-col items-center";

    const notSupportedImg = document.createElement("img");
    notSupportedImg.src = "not-supported.svg";
    notSupportedImg.width = 270;
    notSupportedImg.height = 420;
    notSupportedImg.alt = "";

    const lazyText = document.createElement("h3");
    lazyText.textContent = "Lazy...";

    mobileView.appendChild(notSupportedImg);
    mobileView.appendChild(lazyText);

    container.appendChild(mobileView);

    app.appendChild(container);
  };

  createFlightTicket();
});
