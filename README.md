# Live Nepali Date Time

Display Nepali date and time on your website. Supports live updates as well as one-off date conversions.

#### Example Output:

२०८२ पौष १८, शुक्रबार  
2082 Paush 18, Friday  
०९:२७:२३  
09:27:23

### TL;DR

Include `nepali.js` and call `updateClock()` to show live Nepali/English date and time, or use
`convertToNepaliDate(year,month, day)` for one-off conversions. Test suite is available in the `test/` folder.

<hr>

### Setup

Include the script in your project:

```<script src="nepali.js"></script>```

### Live Clock

To display a live updating clock, add HTML elements where the date/time will appear. Supported IDs:

```
<div id="DATE_IN_NEPALI"></div>
<div id="DATE_IN_ENGLISH"></div>
<div id="TIME_IN_NEPALI"></div>
<div id="TIME_IN_ENGLISH"></div>
```

Then call the updateClock function after including the script:

```
<script>
    updateClock();
</script>
```

This will automatically refresh every second and update the specified elements.

### One-Off Date Conversion

For direct comparison or single date conversion, you can call:

```
<script>
  const [english, nepali] = convertToNepaliDate(2026, 1, 2);
  console.log(english); // "2082 Paush 18, Friday"
  console.log(nepali);  // "२०८२ पौष १८, शुक्रबार"
</script>
```

This works independently of the DOM and does not require HTML elements.

<hr>

### Notes

- Supports years from 1944 to 2033 (English calendar).
- Time automatically converts to Nepali digits for Nepali display.
- Live clock and one-off conversion functions are independent.

### Testing

A basic test suite is in the `test/` folder. Open `test/index.test.html` to run tests defined in `test/nepali.test.js`,
with results shown on the page.

### Future Improvements / Features

- **Extended Year Support:** Support for English years beyond 2033, so users can convert future dates without
  limitation.
- **Customizable Date/Time Format:** Allow users to choose formats, e.g., YYYY/MM/DD, DD-MM-YYYY, 12-hour vs. 24-hour
  clock, or custom Nepali layouts.
- **Timezone Awareness:** Automatic adjustment for different timezones to accurately display local Nepali time.
- **Localization Options:** Support for alternative Nepali scripts, abbreviations, or English transliteration
  variations.
- **Performance Optimizations:** Reduce memory and CPU usage for live clocks on pages with multiple instances.
- **Integration with Frameworks:** Lightweight wrappers for React, Vue, and Angular to simplify integration.
- **Event Hooks:** Allow developers to run callbacks on date change or at specific times.

### Feedback & Suggestions

Your feedback is welcome! If you notice any inconsistencies, bugs, or have ideas for improvement, please open an issue
or submit a pull request.