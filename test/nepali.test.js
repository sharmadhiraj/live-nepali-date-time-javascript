const testCases = [
    {input: [2026, 1, 2], expected: ["2082 Paush 18, Friday", "२०८२ पौष १८, शुक्रबार"]},
    {input: [2025, 12, 31], expected: ["2082 Paush 16, Wednesday", "२०८२ पौष १६, बुधबार"]},
    {input: [2000, 5, 20], expected: ["2057 Jestha 7, Saturday", "२०५७ जेष्ठ ७, शनिबार"]},
    {input: [2026, 4, 14], expected: ["2083 Baisakh 1, Tuesday", "२०८३ बैशाख १, मंगलबार"]},
    {input: [2024, 2, 29], expected: ["2080 Falgun 17, Thursday", "२०८० फाल्गुन १७, बिहिबार"]},
    {input: [2015, 4, 25], expected: ["2072 Baisakh 12, Saturday", "२०७२ बैशाख १२, शनिबार"]},
    {input: [2026, 1, 1], expected: ["2082 Paush 17, Thursday", "२०८२ पौष १७, बिहिबार"]}
];

(function () {
    if (typeof convertToNepaliDate !== "function") {
        const msg = document.createElement("p");
        msg.style.color = "red";
        msg.textContent = "convertToNepaliDate is not loaded. Make sure nepali.js is included first.";
        document.body.appendChild(msg);
        return;
    }

    function runConvertDateTests() {

        const container = document.createElement("div");
        container.style.marginTop = "20px";

        const title = document.createElement("h2");
        title.textContent = "Nepali Date Conversion Tests";
        container.appendChild(title);

        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";
        table.style.marginTop = "10px";

        // Header row
        const header = document.createElement("tr");
        ["#", "Input (YYYY-MM-DD)", "Expected English", "Expected Nepali", "Actual English", "Actual Nepali", "Result"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            th.style.border = "1px solid #ccc";
            th.style.padding = "6px";
            th.style.backgroundColor = "#f0f0f0";
            th.style.textAlign = "left";
            header.appendChild(th);
        });
        table.appendChild(header);

        let allPassed = true;

        testCases.forEach(({input, expected}, idx) => {
            const result = convertToNepaliDate(...input);
            const engMatch = result[0] === expected[0];
            const nepMatch = result[1] === expected[1];
            const row = document.createElement("tr");

            const cells = [
                idx + 1,
                input.join("-"),
                expected[0],
                expected[1],
                result[0],
                result[1],
                engMatch && nepMatch ? "✅ Passed" : "❌ Failed"
            ];

            if (!engMatch || !nepMatch) allPassed = false;

            cells.forEach(cellText => {
                const td = document.createElement("td");
                td.textContent = cellText;
                td.style.border = "1px solid #ccc";
                td.style.padding = "6px";
                row.appendChild(td);
            });

            row.className = engMatch && nepMatch ? "passed" : "failed";
            table.appendChild(row);
        });

        container.appendChild(table);

        const summary = document.createElement("p");
        summary.className = "test-summary " + (allPassed ? "passed" : "failed");
        summary.textContent = allPassed
            ? "All convertToNepaliDate tests passed ✅"
            : "Some convertToNepaliDate tests failed ❌";

        container.appendChild(summary);

        document.body.appendChild(container);
    }

    // Run tests immediately
    runConvertDateTests();
})();
