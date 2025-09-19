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

### CompactSlide
Compact layout with minimal header and maximum content space.

```vue
<CompactSlide 
  title="Compact Title"
  subtitle="Optional subtitle"
  layout="two-column"
  :show-progress="true"
  :show-header="true"
  :compact="true"
>
  <!-- Your content here -->
</CompactSlide>
```

**Props:**
- `title`: Optional slide title
- `subtitle`: Optional subtitle
- `layout`: 'single' | 'two-column' | 'three-column'
- `show-progress`: Show progress bar
- `show-header`: Show header section
- `compact`: Enable compact mode

### MinimalSlide
Minimal layout with ultra-compact header and maximum content space.

```vue
<MinimalSlide 
  title="Minimal Title"
  subtitle="Optional subtitle"
  layout="single"
  :show-header="true"
>
  <!-- Your content here -->
</MinimalSlide>
```

**Props:**
- `title`: Optional slide title
- `subtitle`: Optional subtitle
- `layout`: 'single' | 'two-column' | 'three-column'
- `show-header`: Show header section

### UltraCompactSlide
Ultra-minimal layout with maximum content space and minimal header.

```vue
<UltraCompactSlide 
  title="Ultra Compact Title"
  subtitle="Optional subtitle"
  layout="single"
  :show-header="true"
>
  <!-- Your content here -->
</UltraCompactSlide>
```

**Props:**
- `title`: Optional slide title
- `subtitle`: Optional subtitle
- `layout`: 'single' | 'two-column' | 'three-column'
- `show-header`: Show header section

### FeatureCard
Reusable card component for displaying features with icons, titles, and descriptions.

```vue
<FeatureCard 
  icon="🐱"
  title="Feature Title"
  description="Feature description"
  color="primary"
  size="md"
/>
```

**Props:**
- `icon` (required): Icon or emoji to display
- `title` (required): Card title
- `description` (required): Card description
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
- `size`: 'sm' | 'md' | 'lg'

### HeroSection
Centered hero section with large icon, title, subtitle, and description.

```vue
<HeroSection 
  icon="🐾"
  title="Main Title"
  subtitle="Subtitle"
  description="Description text"
  size="md"
/>
```

**Props:**
- `icon` (required): Large icon or emoji
- `title` (required): Main title
- `subtitle` (required): Subtitle
- `description` (required): Description text
- `size`: 'sm' | 'md' | 'lg'

### IconGrid
Grid layout for displaying multiple icons with labels.

```vue
<IconGrid 
  :items="[
    { icon: '😸', label: 'Playful' },
    { icon: '😴', label: 'Sleepy' },
    { icon: '🎾', label: 'Active' }
  ]"
  :columns="4"
  size="md"
/>
```

**Props:**
- `items` (required): Array of icon items
- `columns`: 2 | 3 | 4 | 5 | 6
- `size`: 'sm' | 'md' | 'lg'

**IconItem Interface:**
```typescript
interface IconItem {
  icon: string
  label: string
}

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

### CompactProcessFlow
Compact version of process flow with 4-step layout.

```vue
<CompactProcessFlow 
  title="Compact Process"
  :steps="processSteps"
  :show-connectors="true"
  :compact="true"
/>
```

**Props:**
- `steps` (required): Array of ProcessStep objects
- `title`: Optional title
- `show-connectors`: Show connecting lines
- `compact`: Enable compact mode

### SequentialFlow
Advanced sequential flow with multiple layout options.

```vue
<SequentialFlow 
  title="Sequential Process"
  :steps="flowSteps"
  layout="wrapped"
  :show-connectors="true"
/>
```

**Props:**
- `steps` (required): Array of FlowStep objects
- `title`: Optional title
- `layout`: 'horizontal' | 'vertical' | 'wrapped'
- `show-connectors`: Show connecting lines

**FlowStep Interface:**
```typescript
interface FlowStep {
  id: string
  title: string
  description: string
  icon: string
  status: 'completed' | 'current' | 'upcoming'
}
```

### ParallelFlow
Visualization for parallel API calls and service orchestration.

```vue
<ParallelFlow 
  title="API Orchestration"
  :orchestrator="orchestratorData"
  :services="apiServices"
  :result="resultData"
/>
```

**Props:**
- `title`: Optional title
- `orchestrator` (required): Orchestrator configuration
- `services` (required): Array of API services
- `result` (required): Result configuration

**Interfaces:**
```typescript
interface ApiService {
  id: string
  name: string
  description: string
  icon: string
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red'
}

interface Orchestrator {
  name: string
  method: string
  icon: string
}

interface Result {
  title: string
  description: string
  icon: string
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

## 🏗️ Architecture & Technical Components

### ArchitectureDiagram
Flexible architecture visualization with multiple layout options.

```vue
<ArchitectureDiagram 
  title="System Architecture"
  layout="horizontal"
  :layers="architectureLayers"
/>
```

**Props:**
- `title`: Optional diagram title
- `layout`: 'vertical' | 'horizontal' | 'hybrid'
- `layers` (required): Array of architecture layers

**ArchitectureLayer Interface:**
```typescript
interface ArchitectureLayer {
  id: string
  title: string
  icon: string
  color: 'blue' | 'green' | 'purple'
  components: {
    icon: string
    name: string
  }[]
}
```

### TechnicalDiagram
Specialized technical diagrams for different system aspects.

```vue
<TechnicalDiagram 
  type="architecture"
  title="System Overview"
  :data="diagramData"
/>
```

**Props:**
- `type` (required): 'architecture' | 'data-flow' | 'caching' | 'retry-strategy'
- `title`: Optional diagram title
- `data`: Optional data for custom diagrams

### CodeWalkthrough
Interactive code walkthrough with highlighting and navigation.

```vue
<CodeWalkthrough 
  code="const example = 'code';"
  codeFile="/path/to/file.ts"
  language="typescript"
  title="Code Walkthrough"
  :show-title="true"
  :blocks="codeBlocks"
  :auto-advance="true"
  :auto-advance-delay="3000"
/>
```

**Props:**
- `code`: Inline code content
- `codeFile`: Path to external code file
- `language`: Code language for syntax highlighting
- `title`: Walkthrough title
- `show-title`: Show title section
- `blocks` (required): Array of code blocks to highlight
- `auto-advance`: Enable automatic progression
- `auto-advance-delay`: Delay between auto-advances (ms)

**CodeBlock Interface:**
```typescript
interface CodeBlock {
  id: string
  startLine: number
  endLine: number
  title: string
  description: string
  highlightColor?: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
}
```

## 🎯 Specialized Cards

### PatternCard
Display design patterns and architectural patterns.

```vue
<PatternCard 
  title="Pattern Name"
  :items="patternItems"
  color="primary"
/>
```

### CompactPatternCard
Compact version of pattern card for space-constrained layouts.

```vue
<CompactPatternCard 
  title="Compact Pattern"
  :items="patternItems"
  color="primary"
/>
```

**PatternItem Interface:**
```typescript
interface PatternItem {
  icon: string
  title: string
  description: string
}
```

### DesignDecisionCard
Document design decisions with trade-offs and rationale.

```vue
<DesignDecisionCard 
  title="Decision Title"
  description="Decision description"
  tradeoff="Trade-off explanation"
  rationale="Rationale for decision"
  tag="Priority"
  tag-color="primary"
/>
```

**Props:**
- `title` (required): Decision title
- `description` (required): Decision description
- `tradeoff`: Trade-off explanation
- `rationale`: Rationale for the decision
- `tag`: Optional tag text
- `tag-color`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

### TechStackCard
Display technology stack information.

```vue
<TechStackCard 
  title="Frontend Stack"
  :items="techItems"
  color="primary"
/>
```

**TechItem Interface:**
```typescript
interface TechItem {
  label: string
  value: string
}
```

### TakeawayCard
Present key takeaways and insights.

```vue
<TakeawayCard :items="takeawayItems" />
```

**TakeawayItem Interface:**
```typescript
interface TakeawayItem {
  icon: string
  title: string
  description: string
}
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

### Compact Layouts
```markdown
<CompactSlide title="Compact Content">
  <div class="grid-2">
    <CompactPatternCard title="Pattern" :items="patterns" />
    <TechStackCard title="Stack" :items="techStack" />
  </div>
</CompactSlide>

<MinimalSlide title="Minimal Content">
  <SequentialFlow :steps="processSteps" layout="wrapped" />
</MinimalSlide>

<UltraCompactSlide title="Ultra Compact">
  <CompactProcessFlow :steps="steps" />
</UltraCompactSlide>
```

### Technical Architecture
```markdown
<ContentSlide title="System Architecture">
  <ArchitectureDiagram 
    layout="horizontal"
    :layers="architectureLayers"
  />
</ContentSlide>

<ContentSlide title="Data Flow">
  <TechnicalDiagram type="data-flow" />
</ContentSlide>

<ContentSlide title="Code Review">
  <CodeWalkthrough 
    codeFile="/path/to/example.ts"
    :blocks="codeBlocks"
    :auto-advance="true"
  />
</ContentSlide>
```

### API and Service Visualization
```markdown
<ContentSlide title="API Orchestration">
  <ParallelFlow 
    :orchestrator="orchestrator"
    :services="apiServices"
    :result="result"
  />
</ContentSlide>
```

### Design Decisions and Patterns
```markdown
<ContentSlide title="Design Decisions">
  <div class="grid-2">
    <DesignDecisionCard 
      title="Caching Strategy"
      description="Implemented Redis caching for performance"
      tradeoff="Increased complexity vs better performance"
      rationale="Performance requirements justify complexity"
      tag="High Priority"
      tag-color="primary"
    />
    <PatternCard title="Resilience Patterns" :items="patterns" />
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

<ContentSlide title="Key Takeaways">
  <TakeawayCard :items="takeawayItems" />
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

## 📋 Component Summary

### Layout Components (9)
- **TitleSlide**: Full-screen title with gradient background
- **SectionSlide**: Section divider with progress indicator
- **ContentSlide**: Flexible content container
- **CompactSlide**: Compact layout with minimal header
- **MinimalSlide**: Minimal layout with ultra-compact header
- **UltraCompactSlide**: Ultra-minimal layout with maximum content space
- **FeatureCard**: Reusable card component for features
- **HeroSection**: Centered hero section with large content
- **IconGrid**: Grid layout for multiple icons with labels

### Content Components (8)
- **StatsCard**: Animated statistics with trend indicators
- **Timeline**: Vertical/horizontal timeline visualization
- **ProcessFlow**: Step-by-step process visualization
- **CompactProcessFlow**: Compact 4-step process flow
- **SequentialFlow**: Advanced sequential flow with multiple layouts
- **ParallelFlow**: Parallel API calls and service orchestration
- **DataTable**: Responsive data table with sorting
- **ComparisonCard**: Side-by-side comparison with progress bars

### Architecture & Technical Components (3)
- **ArchitectureDiagram**: Flexible architecture visualization
- **TechnicalDiagram**: Specialized technical diagrams (architecture, data-flow, caching, retry-strategy)
- **CodeWalkthrough**: Interactive code walkthrough with highlighting

### Specialized Cards (6)
- **PatternCard**: Design and architectural patterns
- **CompactPatternCard**: Compact version of pattern card
- **DesignDecisionCard**: Design decisions with trade-offs and rationale
- **TechStackCard**: Technology stack information
- **TakeawayCard**: Key takeaways and insights
- **ProgressIndicator**: Progress bar with percentage and step indicators

### Utility Components (3)
- **StepExplain**: Callout box for explanations
- **HighlightBox**: Animated highlight box for emphasis
- **Counter**: Animated counter component

### Total Components: 29

This template provides a comprehensive foundation for professional governmental presentations with consistent styling, smooth animations, and an extensive component library covering everything from basic layouts to advanced technical visualizations.
