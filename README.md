# Live Nepali Date Time

Display Nepali date and time on your website. Supports live updates as well as one-off date conversions.

##### Example Output:

२०८२ पौष १८, शुक्रबार  
2082 Paush 18, Friday  
०९:२७:२३  
09:27:23

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

#### Notes

- Supports years from 1944 to 2033 (English calendar).
- Time automatically converts to Nepali digits for Nepali display.
- Live clock and one-off conversion functions are independent.

#### Feedback & Suggestions

Your feedback is welcome! If you notice any inconsistencies, bugs, or have ideas for improvement, please open an issue
or submit a pull request.