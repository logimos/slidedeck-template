# Professional Governmental Presentation Template - Component Guide

This guide provides comprehensive documentation for all components and utilities available in the professional governmental presentation template.

## 🎨 Design System

### Color Palette
- **Primary**: `#1e40af` (Deep blue) - Trust, stability
- **Secondary**: `#059669` (Forest green) - Growth, progress  
- **Accent**: `#dc2626` (Red) - Urgency, importance
- **Neutral**: `#374151` (Dark gray) - Professionalism
- **Muted**: `#6b7280` (Medium gray) - Secondary text
- **Success**: `#10b981` (Green) - Success states
- **Warning**: `#f59e0b` (Amber) - Warning states
- **Danger**: `#ef4444` (Red) - Error states

### Typography
- **Font Family**: Inter (system fallbacks)
- **Headings**: Bold, primary color
- **Body**: Regular weight, neutral color
- **Muted**: Smaller, muted color

## 📐 Layout Components

### TitleSlide
Full-screen title slide with gradient background.

```vue
<TitleSlide 
  title="Your Presentation Title"
  subtitle="Optional subtitle"
  author="Your Name"
  organization="Your Organization"
  date="2024-01-01"
  logo="/path/to/logo.png"
/>
```

**Props:**
- `title` (required): Main title text
- `subtitle`: Optional subtitle
- `author`: Presenter name
- `organization`: Organization name
- `date`: Presentation date
- `logo`: Path to logo image

### SectionSlide
Section divider with progress indicator.

```vue
<SectionSlide 
  title="Section Title"
  subtitle="Optional section description"
  :section-number="1"
  :total-sections="5"
/>
```

**Props:**
- `title` (required): Section title
- `subtitle`: Optional description
- `section-number`: Current section number
- `total-sections`: Total number of sections

### ContentSlide
Flexible content container with optional header and footer.

```vue
<ContentSlide 
  title="Slide Title"
  subtitle="Optional subtitle"
  layout="two-column"
  :show-progress="true"
>
  <!-- Your content here -->
</ContentSlide>
```

**Props:**
- `title`: Optional slide title
- `subtitle`: Optional subtitle
- `layout`: 'single' | 'two-column' | 'three-column'
- `show-progress`: Show progress bar

## 📊 Content Components

### StatsCard
Animated statistics card with trend indicators.

```vue
<StatsCard 
  title="Budget Utilization"
  :value="87"
  unit="%"
  :change="5.2"
  change-type="increase"
  icon="💰"
  color="primary"
  :animated="true"
/>
```

**Props:**
- `title` (required): Card title
- `value` (required): Numeric or string value
- `unit`: Optional unit (%, $, etc.)
- `change`: Percentage change
- `change-type`: 'increase' | 'decrease' | 'neutral'
- `icon`: Emoji or icon character
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
- `animated`: Enable number animation

### Timeline
Vertical or horizontal timeline component.

```vue
<Timeline 
  :items="timelineItems"
  orientation="vertical"
/>
```

**TimelineItem Interface:**
```typescript
interface TimelineItem {
  date: string
  title: string
  description?: string
  status?: 'completed' | 'current' | 'upcoming'
  icon?: string
}
```

### ProcessFlow
Step-by-step process visualization.

```vue
<ProcessFlow 
  title="Implementation Process"
  :steps="processSteps"
  :show-connectors="true"
/>
```

**ProcessStep Interface:**
```typescript
interface ProcessStep {
  id: string
  title: string
  description?: string
  icon?: string
  status?: 'completed' | 'current' | 'upcoming'
}
```

### DataTable
Responsive data table with sorting and customization.

```vue
<DataTable 
  title="Budget Analysis"
  :columns="tableColumns"
  :data="tableData"
  :striped="true"
  :hoverable="true"
  :compact="false"
/>
```

**Column Interface:**
```typescript
interface Column {
  key: string
  title: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}
```

### ComparisonCard
Side-by-side comparison with progress bars.

```vue
<ComparisonCard 
  title="Performance Metrics"
  :items="comparisonItems"
  :show-chart="true"
  chart-type="bar"
/>
```

### ProgressIndicator
Progress bar with percentage and step indicators.

```vue
<ProgressIndicator 
  :current="3"
  :total="5"
  :show-percentage="true"
  :show-steps="true"
  color="primary"
  size="md"
/>
```

## 🎯 Utility Components

### StepExplain
Callout box for explanations and highlights.

```vue
<StepExplain type="success" title="Key Finding">
  Your explanation text here.
</StepExplain>
```

**Props:**
- `title` (required): Callout title
- `type`: 'info' | 'success' | 'warning' | 'danger'

### HighlightBox
Animated highlight box for emphasis.

```vue
<HighlightBox :x="100" :y="50" :w="200" :h="100" />
```

## 🎨 UnoCSS Utilities

### Typography
- `heading-xl`: Extra large heading
- `heading-lg`: Large heading  
- `heading-md`: Medium heading
- `heading-sm`: Small heading
- `text-primary`: Primary colored text
- `text-secondary`: Secondary colored text
- `text-muted`: Muted colored text
- `text-accent`: Accent colored text

### Cards & Containers
- `card`: Basic card styling
- `card-elevated`: Elevated card with shadow
- `card-primary`: Primary colored card
- `card-secondary`: Secondary colored card

### Callouts
- `callout`: Default callout
- `callout-success`: Success callout
- `callout-warning`: Warning callout
- `callout-danger`: Danger callout

### Buttons
- `btn-primary`: Primary button
- `btn-secondary`: Secondary button
- `btn-outline`: Outline button

### Grid Layouts
- `grid-2`: Two column grid
- `grid-3`: Three column grid
- `grid-4`: Four column grid

### Spacing
- `section-spacing`: Large bottom margin
- `content-spacing`: Medium bottom margin
- `element-spacing`: Small bottom margin

## 🚀 Usage Examples

### Basic Presentation Structure
```markdown
---
# Your Presentation
layout: cover
---

<TitleSlide title="Your Title" />

---
layout: section
---

<SectionSlide title="Section 1" :section-number="1" :total-sections="3" />

---
layout: default
---

<ContentSlide title="Key Metrics">
  <div class="grid-3">
    <StatsCard title="Metric 1" :value="100" unit="%" />
    <StatsCard title="Metric 2" :value="50" unit="%" />
    <StatsCard title="Metric 3" :value="75" unit="%" />
  </div>
</ContentSlide>
```

### Data Visualization
```markdown
<ContentSlide title="Performance Analysis">
  <div class="grid-2">
    <DataTable :columns="columns" :data="data" />
    <ComparisonCard :items="comparisonData" />
  </div>
</ContentSlide>
```

### Process Documentation
```markdown
<ContentSlide title="Implementation Process">
  <ProcessFlow :steps="implementationSteps" />
</ContentSlide>
```

## 🎭 Animations & Transitions

All components include smooth animations:
- **Fade in**: Content appears with opacity transition
- **Slide up**: Elements slide in from bottom
- **Scale**: Hover effects with scale transformation
- **Progress**: Animated progress bars and counters

## 📱 Responsive Design

The template is fully responsive:
- **Mobile**: Single column layouts, smaller text
- **Tablet**: Two column layouts, medium text
- **Desktop**: Multi-column layouts, full text size

## 🎨 Customization

### Adding Custom Colors
Update `uno.config.ts`:
```typescript
theme: {
  colors: {
    custom: '#your-color',
    // ... existing colors
  }
}
```

### Creating Custom Components
1. Create new `.vue` file in `components/`
2. Use existing UnoCSS utilities
3. Follow the established patterns
4. Add to this documentation

## 📚 Best Practices

1. **Consistency**: Use the same components throughout
2. **Accessibility**: Ensure good contrast and readable text
3. **Performance**: Use animations sparingly
4. **Content**: Keep slides focused and concise
5. **Testing**: Test on different screen sizes

## 🔧 Development

### Adding New Components
1. Create component in `components/`
2. Add TypeScript interfaces
3. Use UnoCSS utilities
4. Include animations
5. Update documentation

### Modifying Styles
1. Update `uno.config.ts` for global changes
2. Use scoped styles for component-specific changes
3. Follow the established design system

This template provides a solid foundation for professional governmental presentations with consistent styling, smooth animations, and comprehensive component library.
