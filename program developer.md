Included
PROGRAM SECTION 
Services section
Projects/portfolio cards
Project category filter
Responsive desktop/tablet/mobile layout
Contact CTA hooks
Styling isolated under m5-* classes
FILES
src/
├── Member5.jsx
└── member5.css
INTEGRATION 
The supplied main project already has the same Programs, Services and Projects data. To use this isolated Member 5 module instead:
Copy Member5.jsx and member5.css into the main project's src/ folder.
In main.jsx, add:
import Member5 from "./Member 5";
Replace the existing Programs + Services + Projects JSX with:
<Member5 scrollTo={scrollTo} />
Keep the main project's styles.css because the module reuses its shared variables/classes such as .container, .section-kicker, .tinted, and CSS variables.