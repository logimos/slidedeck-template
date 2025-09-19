---
# Component Showcase: Cats vs Dogs
layout: cover
---

<TitleSlide 
  title="Component Showcase"
  subtitle="A Fun Journey Through Our Component Library"
  author="Component Explorer"
  organization="Cats & Dogs Analytics Inc."
  date="2024"
  logo="🐾"
/>

---
layout: section
---

<SectionSlide 
  title="Layout Components"
  subtitle="The foundation of our presentation system"
  :section-number="1"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Layout Components Overview">
  <div class="grid-2">
    <div class="card p-6">
      <h3 class="heading-md text-primary mb-4">📐 Layout Components</h3>
      <ul class="space-y-2 text-muted">
        <li>TitleSlide - Full-screen title with gradient</li>
        <li>SectionSlide - Section divider with progress</li>
        <li>ContentSlide - Flexible content container</li>
        <li>CompactSlide - Compact layout with minimal header</li>
        <li>MinimalSlide - Minimal layout with ultra-compact header</li>
        <li>UltraCompactSlide - Ultra-minimal with maximum content space</li>
      </ul>
    </div>
    <div class="card p-6">
      <h3 class="heading-md text-secondary mb-4">🎯 Use Cases</h3>
      <ul class="space-y-2 text-muted">
        <li>TitleSlide: Presentation covers and introductions</li>
        <li>SectionSlide: Chapter breaks and navigation</li>
        <li>ContentSlide: Main content with flexible layouts</li>
        <li>Compact variants: Space-constrained presentations</li>
        <li>Minimal variants: Focus on content over decoration</li>
      </ul>
    </div>
  </div>
</ContentSlide>

---
layout: default
---

<CompactSlide title="Compact Layout Demo" subtitle="Perfect for dense information">
  <div class="grid-3">
    <FeatureCard 
      icon="🐱"
      title="Cat Stats"
      description="Independent & graceful"
      color="primary"
      size="md"
    />
    <FeatureCard 
      icon="🐕"
      title="Dog Stats"
      description="Loyal & energetic"
      color="secondary"
      size="md"
    />
    <FeatureCard 
      icon="🏆"
      title="Winner"
      description="Both are amazing!"
      color="success"
      size="md"
    />
  </div>
</CompactSlide>

---
layout: default
---

<MinimalSlide title="Minimal Layout" subtitle="Clean and focused">
  <HeroSection 
    icon="🐾"
    title="The Great Pet Debate"
    subtitle="Exploring Component Capabilities"
    description="Cats and dogs each bring unique qualities to our lives. This presentation explores the components that help us visualize their amazing characteristics."
    size="md"
  />
</MinimalSlide>

---
layout: default
---

<UltraCompactSlide title="Ultra Compact" subtitle="Maximum content, minimal chrome">
  <IconGrid 
    :items="[
      { icon: '😸', label: 'Playful' },
      { icon: '😴', label: 'Sleepy' },
      { icon: '🎾', label: 'Active' },
      { icon: '❤️', label: 'Loving' }
    ]"
    :columns="4"
    size="md"
  />
</UltraCompactSlide>

---
layout: section
---

<SectionSlide 
  title="Content Components"
  subtitle="Data visualization and interactive elements"
  :section-number="2"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Statistics & Metrics">
  <div class="grid-3">
    <StatsCard 
      title="Cat Popularity"
      :value="47"
      unit="%"
      :change="3.2"
      change-type="increase"
      icon="🐱"
      color="primary"
      :animated="true"
    />
    <StatsCard 
      title="Dog Popularity"
      :value="53"
      unit="%"
      :change="2.8"
      change-type="increase"
      icon="🐕"
      color="secondary"
      :animated="true"
    />
    <StatsCard 
      title="Pet Ownership"
      :value="70"
      unit="%"
      :change="5.1"
      change-type="increase"
      icon="🏠"
      color="success"
      :animated="true"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Adoption Timeline">
  <Timeline 
    :items="[
      { date: 'Week 1', title: 'Research Phase', description: 'Learn about different breeds and their needs', status: 'completed', icon: '📚' },
      { date: 'Week 2', title: 'Visit Shelters', description: 'Meet potential furry friends', status: 'completed', icon: '🏠' },
      { date: 'Week 3', title: 'Home Preparation', description: 'Set up pet supplies and safe spaces', status: 'current', icon: '🛠️' },
      { date: 'Week 4', title: 'Adoption Day', description: 'Bring your new family member home!', status: 'upcoming', icon: '🎉' }
    ]"
    orientation="vertical"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Care Process Flow">
  <ProcessFlow 
    title="Daily Pet Care Routine"
    :steps="[
      { id: '1', title: 'Morning Feeding', description: 'Fresh food and water', icon: '🍽️', status: 'completed' },
      { id: '2', title: 'Exercise Time', description: 'Play and physical activity', icon: '🏃', status: 'completed' },
      { id: '3', title: 'Grooming', description: 'Brushing and hygiene care', icon: '🪥', status: 'current' },
      { id: '4', title: 'Evening Cuddles', description: 'Quality bonding time', icon: '🤗', status: 'upcoming' }
    ]"
    :show-connectors="true"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Compact Process Flow">
  <CompactProcessFlow 
    title="Quick Pet Health Check"
    :steps="[
      { id: '1', title: 'Eyes', description: 'Clear and bright', icon: '👁️', status: 'completed' },
      { id: '2', title: 'Ears', description: 'Clean and odor-free', icon: '👂', status: 'completed' },
      { id: '3', title: 'Coat', description: 'Shiny and smooth', icon: '✨', status: 'current' },
      { id: '4', title: 'Energy', description: 'Active and playful', icon: '⚡', status: 'upcoming' }
    ]"
    :show-connectors="true"
    :compact="true"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Sequential Pet Training Flow">
  <SequentialFlow 
    title="Training Progression"
    :steps="[
      { id: '1', title: 'Basic Commands', description: 'Sit, stay, come', icon: '👋', status: 'completed' },
      { id: '2', title: 'House Training', description: 'Potty training and boundaries', icon: '🏠', status: 'completed' },
      { id: '3', title: 'Socialization', description: 'Meeting other pets and people', icon: '👥', status: 'current' },
      { id: '4', title: 'Advanced Tricks', description: 'Fun and impressive behaviors', icon: '🎪', status: 'upcoming' },
      { id: '5', title: 'Ongoing Practice', description: 'Maintaining learned behaviors', icon: '🔄', status: 'upcoming' }
    ]"
    layout="wrapped"
    :show-connectors="true"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Service Orchestration">
  <ParallelFlow 
    title="Multi-Service Pet Care"
    :orchestrator="{
      name: 'Pet Care Coordinator',
      method: 'Parallel Service Calls',
      icon: '🎯'
    }"
    :services="[
      { id: '1', name: 'Vet Checkup', description: 'Health assessment', icon: '🩺', color: 'blue' },
      { id: '2', name: 'Grooming', description: 'Bath and styling', icon: '✂️', color: 'green' },
      { id: '3', name: 'Training', description: 'Behavioral guidance', icon: '🎓', color: 'purple' },
      { id: '4', name: 'Nutrition', description: 'Diet consultation', icon: '🥗', color: 'orange' },
      { id: '5', name: 'Exercise', description: 'Physical activity', icon: '🏃', color: 'red' }
    ]"
    :result="{
      title: 'Happy & Healthy Pet',
      description: 'All services completed successfully',
      icon: '🌟'
    }"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Data Analysis">
  <DataTable 
    title="Pet Statistics by Breed"
    :columns="[
      { key: 'breed', title: 'Breed', width: '25%', align: 'left' },
      { key: 'popularity', title: 'Popularity %', width: '20%', align: 'center', sortable: true },
      { key: 'size', title: 'Size', width: '15%', align: 'center' },
      { key: 'energy', title: 'Energy Level', width: '20%', align: 'center' },
      { key: 'lifespan', title: 'Avg Lifespan', width: '20%', align: 'center' }
    ]"
    :data="[
      { breed: 'Golden Retriever', popularity: 23, size: 'Large', energy: 'High', lifespan: '10-12 years' },
      { breed: 'Persian Cat', popularity: 18, size: 'Medium', energy: 'Low', lifespan: '12-17 years' },
      { breed: 'French Bulldog', popularity: 15, size: 'Small', energy: 'Medium', lifespan: '10-12 years' },
      { breed: 'Maine Coon', popularity: 12, size: 'Large', energy: 'Medium', lifespan: '13-14 years' },
      { breed: 'Labrador', popularity: 22, size: 'Large', energy: 'High', lifespan: '10-14 years' },
      { breed: 'Siamese', popularity: 10, size: 'Medium', energy: 'High', lifespan: '15-20 years' }
    ]"
    :striped="true"
    :hoverable="true"
    :compact="false"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Comparison Analysis">
  <ComparisonCard 
    title="Cats vs Dogs: Key Metrics"
    :items="[
      { label: 'Independence', value: 90, change: 30, unit: '%', changeType: 'increase' },
      { label: 'Loyalty', value: 70, change: 10, unit: '%', changeType: 'increase' },
      { label: 'Energy Level', value: 40, change: 80, unit: '%', changeType: 'increase' },
      { label: 'Maintenance', value: 60, change: 75, unit: '%', changeType: 'increase' },
      { label: 'Affection', value: 65, change: 90, unit: '%', changeType: 'increase' }
    ]"
    :show-chart="true"
    chart-type="bar"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Progress Tracking">
  <div class="grid-2">
    <div>
      <h3 class="heading-md mb-4">Training Progress</h3>
      <ProgressIndicator 
        :current="7"
        :total="10"
        :show-percentage="true"
        :show-steps="true"
        color="primary"
        size="md"
      />
    </div>
    <div>
      <h3 class="heading-md mb-4">Health Check Progress</h3>
      <ProgressIndicator 
        :current="3"
        :total="5"
        :show-percentage="true"
        :show-steps="true"
        color="secondary"
        size="md"
      />
    </div>
  </div>
</ContentSlide>

---
layout: section
---

<SectionSlide 
  title="Architecture & Technical Components"
  subtitle="System design and technical visualizations"
  :section-number="3"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Pet Care System Architecture">
  <ArchitectureDiagram 
    title="Pet Care Management System"
    layout="horizontal"
    :layers="[
      {
        id: 'frontend',
        title: 'User Interface',
        icon: '🖥️',
        color: 'blue',
        components: [
          { icon: '📱', name: 'Mobile App' },
          { icon: '💻', name: 'Web Dashboard' },
          { icon: '⌚', name: 'Wearable Tracker' }
        ]
      },
      {
        id: 'services',
        title: 'Core Services',
        icon: '⚙️',
        color: 'green',
        components: [
          { icon: '🏥', name: 'Health Monitor' },
          { icon: '🍽️', name: 'Feeding System' },
          { icon: '🎾', name: 'Activity Tracker' }
        ]
      },
      {
        id: 'data',
        title: 'Data Layer',
        icon: '💾',
        color: 'purple',
        components: [
          { icon: '📊', name: 'Analytics DB' },
          { icon: '📝', name: 'Health Records' },
          { icon: '☁️', name: 'Cloud Storage' }
        ]
      }
    ]"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Data Flow Architecture">
  <TechnicalDiagram 
    type="data-flow"
    title="Pet Health Data Flow"
    :data="{
      sources: ['Pet Wearables', 'Owner Input', 'Vet Records'],
      processors: ['Health Analyzer', 'Trend Calculator', 'Alert Generator'],
      outputs: ['Health Dashboard', 'Vet Reports', 'Owner Notifications']
    }"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Care Caching Strategy">
  <TechnicalDiagram 
    type="caching"
    title="Pet Data Caching System"
    :data="{
      layers: ['Application Cache', 'Redis Cache', 'Database'],
      strategies: ['Health Data (TTL: 1h)', 'User Preferences (TTL: 24h)', 'Static Data (TTL: 7d)']
    }"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Pet Service Retry Strategy">
  <TechnicalDiagram 
    type="retry-strategy"
    title="Resilient Pet Service Architecture"
    :data="{
      services: ['Health API', 'Feeding API', 'Activity API'],
      strategies: ['Exponential Backoff', 'Circuit Breaker', 'Fallback Cache']
    }"
  />
</ContentSlide>

---
layout: default
---

<UltraCompactSlide title="Pet Care Code Walkthrough">
  <CodeWalkthrough 
    :code="'// Pet Care Service Implementation\nclass PetCareService {\n  private healthMonitor: HealthMonitor;\n  private feedingSystem: FeedingSystem;\n  private activityTracker: ActivityTracker;\n\n  constructor() {\n    this.healthMonitor = new HealthMonitor();\n    this.feedingSystem = new FeedingSystem();\n    this.activityTracker = new ActivityTracker();\n  }\n\n  async checkPetHealth(petId: string): Promise<HealthStatus> {\n    try {\n      const healthData = await this.healthMonitor.getHealthData(petId);\n      const feedingData = await this.feedingSystem.getFeedingHistory(petId);\n      const activityData = await this.activityTracker.getActivityData(petId);\n      \n      return this.analyzeHealthStatus(healthData, feedingData, activityData);\n    } catch (error) {\n      console.error(\'Health check failed:\', error);\n      throw new PetCareError(\'Unable to check pet health\');\n    }\n  }\n\n  private analyzeHealthStatus(\n    health: HealthData, \n    feeding: FeedingData, \n    activity: ActivityData\n  ): HealthStatus {\n    const score = this.calculateHealthScore(health, feeding, activity);\n    return {\n      score,\n      status: score > 80 ? \'excellent\' : score > 60 ? \'good\' : \'needs_attention\',\n      recommendations: this.generateRecommendations(health, feeding, activity)\n    };\n  }\n}'"
    language="typescript"
    :blocks="[
      { id: '1', startLine: 1, endLine: 8, title: 'Service Setup', description: 'Initialize pet care components', highlightColor: 'blue' },
      { id: '2', startLine: 10, endLine: 20, title: 'Health Check', description: 'Main health monitoring method', highlightColor: 'green' },
      { id: '3', startLine: 22, endLine: 30, title: 'Health Analysis', description: 'Analyze and score pet health', highlightColor: 'yellow' }
    ]"
    :auto-advance="true"
    :auto-advance-delay="4000"
  />
</UltraCompactSlide>

---
layout: section
---

<SectionSlide 
  title="Specialized Cards"
  subtitle="Patterns, decisions, and insights"
  :section-number="4"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Pet Care Patterns">
  <div class="grid-2">
    <PatternCard 
      title="Pet Care Patterns"
      :items="[
        { icon: '🔄', title: 'Routine Pattern', description: 'Consistent daily care schedules' },
        { icon: '⚡', title: 'Adaptive Pattern', description: 'Flexible care based on pet needs' },
        { icon: '🛡️', title: 'Preventive Pattern', description: 'Proactive health monitoring' },
        { icon: '🤝', title: 'Collaborative Pattern', description: 'Multi-person care coordination' }
      ]"
      color="primary"
    />
    <CompactPatternCard 
      title="Quick Patterns"
      :items="[
        { icon: '⏰', title: 'Scheduled', description: 'Time-based care' },
        { icon: '📊', title: 'Data-Driven', description: 'Metrics-based decisions' },
        { icon: '🎯', title: 'Goal-Oriented', description: 'Targeted improvements' }
      ]"
      color="secondary"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Design Decisions">
  <div class="grid-2">
    <DesignDecisionCard 
      title="Automated Feeding System"
      description="Implement smart feeding bowls with portion control"
      tradeoff="Higher cost vs consistent nutrition"
      rationale="Ensures pets get proper nutrition even when owners are busy"
      tag="High Priority"
      tag-color="primary"
    />
    <DesignDecisionCard 
      title="Health Monitoring"
      description="Use wearable devices for continuous health tracking"
      tradeoff="Privacy concerns vs early health detection"
      rationale="Early detection of health issues can save lives and reduce costs"
      tag="Medium Priority"
      tag-color="secondary"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Technology Stack">
  <div class="grid-2">
    <TechStackCard 
      title="Frontend Stack"
      :items="[
        { label: 'Framework', value: 'Vue.js 3' },
        { label: 'Styling', value: 'UnoCSS' },
        { label: 'Charts', value: 'Chart.js' },
        { label: 'Icons', value: 'Emoji Icons' }
      ]"
      color="primary"
    />
    <TechStackCard 
      title="Backend Stack"
      :items="[
        { label: 'Runtime', value: 'Node.js' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Cache', value: 'Redis' },
        { label: 'API', value: 'GraphQL' }
      ]"
      color="secondary"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Key Takeaways">
  <TakeawayCard :items="[
    { icon: '🐾', title: 'Pet Care is Complex', description: 'Requires multiple systems working together seamlessly' },
    { icon: '📊', title: 'Data is Key', description: 'Monitoring and analytics drive better pet care decisions' },
    { icon: '🔄', title: 'Automation Helps', description: 'Smart systems reduce human error and ensure consistency' },
    { icon: '❤️', title: 'Love Matters Most', description: 'Technology enhances but never replaces the human-pet bond' }
  ]" />
</ContentSlide>

---
layout: section
---

<SectionSlide 
  title="Utility Components"
  subtitle="Helpers and interactive elements"
  :section-number="5"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Utility Components Demo">
  <div class="grid-2">
    <div>
      <h3 class="heading-md mb-4">Callouts & Highlights</h3>
      <div class="space-y-4">
        <StepExplain type="success" title="🐱 Cat Fact">
          Cats spend 70% of their lives sleeping - that's 13-16 hours per day!
        </StepExplain>
        <StepExplain type="info" title="🐕 Dog Fact">
          Dogs have a sense of smell that's 40 times better than humans.
        </StepExplain>
        <StepExplain type="warning" title="⚠️ Important">
          Always consult with a veterinarian for health concerns.
        </StepExplain>
      </div>
    </div>
    <div>
      <h3 class="heading-md mb-4">Interactive Elements</h3>
      <div class="space-y-4">
        <div class="card p-4 text-center">
          <Counter :value="42" :animated="true" />
          <p class="text-sm text-muted mt-2">Pets helped today</p>
        </div>
        <div class="card p-4">
          <h4 class="font-semibold mb-2">Highlight Box Demo</h4>
          <div class="relative">
            <div class="p-4 bg-gray-100 rounded">
              <p>This area can be highlighted with the HighlightBox component for emphasis during presentations.</p>
            </div>
            <HighlightBox :x="10" :y="10" :w="200" :h="80" />
          </div>
        </div>
      </div>
    </div>
  </div>
</ContentSlide>

---
layout: section
---

<SectionSlide 
  title="Component Summary"
  subtitle="Complete overview of our component library"
  :section-number="6"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Component Library Overview">
  <div class="grid-3">
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">📐</div>
      <h3 class="heading-md text-primary mb-2">Layout Components</h3>
      <div class="text-2xl font-bold text-primary mb-2">6</div>
      <p class="text-sm text-muted">Foundation components for presentation structure</p>
    </div>
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">📊</div>
      <h3 class="heading-md text-secondary mb-2">Content Components</h3>
      <div class="text-2xl font-bold text-secondary mb-2">8</div>
      <p class="text-sm text-muted">Data visualization and interactive elements</p>
    </div>
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">🏗️</div>
      <h3 class="heading-md text-accent mb-2">Technical Components</h3>
      <div class="text-2xl font-bold text-accent mb-2">3</div>
      <p class="text-sm text-muted">Architecture and system design tools</p>
    </div>
  </div>
  <div class="grid-3 mt-6">
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">🎯</div>
      <h3 class="heading-md text-success mb-2">Specialized Cards</h3>
      <div class="text-2xl font-bold text-success mb-2">6</div>
      <p class="text-sm text-muted">Patterns, decisions, and insights</p>
    </div>
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">🔧</div>
      <h3 class="heading-md text-warning mb-2">Utility Components</h3>
      <div class="text-2xl font-bold text-warning mb-2">3</div>
      <p class="text-sm text-muted">Helpers and interactive elements</p>
    </div>
    <div class="card p-6 text-center">
      <div class="text-4xl mb-4">🎉</div>
      <h3 class="heading-md text-danger mb-2">Total Components</h3>
      <div class="text-2xl font-bold text-danger mb-2">26</div>
      <p class="text-sm text-muted">Complete component ecosystem</p>
    </div>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Component Categories Breakdown">
  <div class="grid-2">
    <div>
      <h3 class="heading-md mb-4">📐 Layout Components (6)</h3>
      <ul class="space-y-2 text-sm">
        <li><strong>TitleSlide</strong> - Full-screen title with gradient background</li>
        <li><strong>SectionSlide</strong> - Section divider with progress indicator</li>
        <li><strong>ContentSlide</strong> - Flexible content container</li>
        <li><strong>CompactSlide</strong> - Compact layout with minimal header</li>
        <li><strong>MinimalSlide</strong> - Minimal layout with ultra-compact header</li>
        <li><strong>UltraCompactSlide</strong> - Ultra-minimal layout with maximum content space</li>
      </ul>
    </div>
    <div>
      <h3 class="heading-md mb-4">📊 Content Components (8)</h3>
      <ul class="space-y-2 text-sm">
        <li><strong>StatsCard</strong> - Animated statistics with trend indicators</li>
        <li><strong>Timeline</strong> - Vertical/horizontal timeline visualization</li>
        <li><strong>ProcessFlow</strong> - Step-by-step process visualization</li>
        <li><strong>CompactProcessFlow</strong> - Compact 4-step process flow</li>
        <li><strong>SequentialFlow</strong> - Advanced sequential flow with multiple layouts</li>
        <li><strong>ParallelFlow</strong> - Parallel API calls and service orchestration</li>
        <li><strong>DataTable</strong> - Responsive data table with sorting</li>
        <li><strong>ComparisonCard</strong> - Side-by-side comparison with progress bars</li>
      </ul>
    </div>
  </div>
  <div class="grid-2 mt-6">
    <div>
      <h3 class="heading-md mb-4">🏗️ Technical Components (3)</h3>
      <ul class="space-y-2 text-sm">
        <li><strong>ArchitectureDiagram</strong> - Flexible architecture visualization</li>
        <li><strong>TechnicalDiagram</strong> - Specialized technical diagrams</li>
        <li><strong>CodeWalkthrough</strong> - Interactive code walkthrough with highlighting</li>
      </ul>
    </div>
    <div>
      <h3 class="heading-md mb-4">🎯 Specialized Cards (6)</h3>
      <ul class="space-y-2 text-sm">
        <li><strong>PatternCard</strong> - Design and architectural patterns</li>
        <li><strong>CompactPatternCard</strong> - Compact version of pattern card</li>
        <li><strong>DesignDecisionCard</strong> - Design decisions with trade-offs</li>
        <li><strong>TechStackCard</strong> - Technology stack information</li>
        <li><strong>TakeawayCard</strong> - Key takeaways and insights</li>
        <li><strong>ProgressIndicator</strong> - Progress bar with percentage and steps</li>
      </ul>
    </div>
  </div>
  <div class="mt-6">
    <h3 class="heading-md mb-4">🔧 Utility Components (3)</h3>
    <ul class="space-y-2 text-sm">
      <li><strong>StepExplain</strong> - Callout box for explanations and highlights</li>
      <li><strong>HighlightBox</strong> - Animated highlight box for emphasis</li>
      <li><strong>Counter</strong> - Animated counter component</li>
    </ul>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Best Practices & Usage Tips">
  <div class="grid-2">
    <div>
      <h3 class="heading-md mb-4">🎨 Design Principles</h3>
      <ul class="space-y-3 text-sm">
        <li>
          <div class="font-semibold text-primary">Consistency</div>
          <div class="text-muted">Use the same components throughout your presentation</div>
        </li>
        <li>
          <div class="font-semibold text-secondary">Accessibility</div>
          <div class="text-muted">Ensure good contrast and readable text</div>
        </li>
        <li>
          <div class="font-semibold text-accent">Performance</div>
          <div class="text-muted">Use animations sparingly for better performance</div>
        </li>
        <li>
          <div class="font-semibold text-success">Content Focus</div>
          <div class="text-muted">Keep slides focused and concise</div>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="heading-md mb-4">🚀 Usage Tips</h3>
      <ul class="space-y-3 text-sm">
        <li>
          <div class="font-semibold text-primary">Layout Selection</div>
          <div class="text-muted">Choose layout based on content density and audience</div>
        </li>
        <li>
          <div class="font-semibold text-secondary">Data Visualization</div>
          <div class="text-muted">Use appropriate charts and tables for your data</div>
        </li>
        <li>
          <div class="font-semibold text-accent">Technical Content</div>
          <div class="text-muted">Leverage architecture and code components for technical presentations</div>
        </li>
        <li>
          <div class="font-semibold text-success">Testing</div>
          <div class="text-muted">Test on different screen sizes and devices</div>
        </li>
      </ul>
    </div>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Thank You! 🐾">
  <div class="text-center">
    <div class="text-8xl mb-8">🎉</div>
    <h2 class="heading-xl text-primary mb-6">Component Showcase Complete!</h2>
    <p class="text-lg text-muted max-w-3xl mx-auto mb-8">
      We've explored all 26 components in our library, from basic layouts to advanced technical visualizations. 
      Each component is designed to help you create engaging, professional presentations that tell your story effectively.
    </p>
    <div class="grid-3 max-w-2xl mx-auto">
      <div class="text-center">
        <div class="text-3xl mb-2">🐱</div>
        <div class="font-semibold">Cats</div>
        <div class="text-sm text-muted">Independent & Graceful</div>
      </div>
      <div class="text-center">
        <div class="text-3xl mb-2">🐕</div>
        <div class="font-semibold">Dogs</div>
        <div class="text-sm text-muted">Loyal & Energetic</div>
      </div>
      <div class="text-center">
        <div class="text-3xl mb-2">🎨</div>
        <div class="font-semibold">Components</div>
        <div class="text-sm text-muted">Flexible & Powerful</div>
      </div>
    </div>
  </div>
</ContentSlide>

---
layout: cover
---

<TitleSlide 
  title="Questions & Discussion"
  subtitle="Let's explore how these components can help your presentations"
  author="Component Library Team"
  organization="Cats & Dogs Analytics Inc."
  date="2024"
  logo="❓"
/>
