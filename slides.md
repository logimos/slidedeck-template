---
# Professional Governmental Presentation Template
subtitle: A comprehensive template for governmental presentations
author: Your Name
date: 2024-01-15
layout: cover
class: text-left
---

<TitleSlide 
  title="Professional Governmental Presentation Template"
  subtitle="A comprehensive template for governmental presentations"
  author="Your Name"
  organization="Your Organization"
  date="2024-01-15"
/>

---
layout: section
---

<SectionSlide 
  title="Executive Summary"
  subtitle="Key findings and recommendations"
  :section-number="1"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Key Performance Indicators" subtitle="Current status and trends">
  <div class="grid-3">
    <StatsCard 
      title="Budget Utilization"
      :value="87"
      unit="%"
      :change="5.2"
      change-type="increase"
      icon="💰"
      color="primary"
    />
    <StatsCard 
      title="Project Completion"
      :value="23"
      unit="projects"
      :change="-2.1"
      change-type="decrease"
      icon="✅"
      color="success"
    />
    <StatsCard 
      title="Citizen Satisfaction"
      :value="4.2"
      unit="/5.0"
      :change="0.3"
      change-type="increase"
      icon="😊"
      color="secondary"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Implementation Timeline" subtitle="Project milestones and deadlines">
  <Timeline 
    orientation="horizontal"
    :items="[
      { date: 'Q1 2024', title: 'Planning Phase', description: 'Requirements gathering and analysis', status: 'completed', icon: '📋' },
      { date: 'Q2 2024', title: 'Development', description: 'Core system development', status: 'current', icon: '🔧' },
      { date: 'Q3 2024', title: 'Testing', description: 'Quality assurance and testing', status: 'upcoming', icon: '🧪' },
      { date: 'Q4 2024', title: 'Deployment', description: 'Production rollout', status: 'upcoming', icon: '🚀' }
    ]"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Process Overview" subtitle="Step-by-step implementation process">
  <ProcessFlow 
    title="Digital Transformation Process"
    :steps="[
      { id: '1', title: 'Assessment', description: 'Current state analysis', status: 'completed', icon: '🔍' },
      { id: '2', title: 'Planning', description: 'Strategic roadmap', status: 'completed', icon: '📊' },
      { id: '3', title: 'Implementation', description: 'System deployment', status: 'current', icon: '⚙️' },
      { id: '4', title: 'Monitoring', description: 'Performance tracking', status: 'upcoming', icon: '📈' }
    ]"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Budget Analysis" subtitle="Financial breakdown by department">
  <DataTable 
    title="Department Budget Allocation"
    :columns="[
      { key: 'department', title: 'Department', width: '30%' },
      { key: 'allocated', title: 'Allocated', width: '20%', align: 'right' },
      { key: 'spent', title: 'Spent', width: '20%', align: 'right' },
      { key: 'remaining', title: 'Remaining', width: '20%', align: 'right' },
      { key: 'utilization', title: 'Utilization', width: '10%', align: 'center' }
    ]"
    :data="[
      { department: 'Public Works', allocated: '$2.5M', spent: '$2.1M', remaining: '$400K', utilization: '84%' },
      { department: 'Health Services', allocated: '$1.8M', spent: '$1.6M', remaining: '$200K', utilization: '89%' },
      { department: 'Education', allocated: '$3.2M', spent: '$2.8M', remaining: '$400K', utilization: '88%' },
      { department: 'Public Safety', allocated: '$2.1M', spent: '$1.9M', remaining: '$200K', utilization: '90%' }
    ]"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Performance Comparison" subtitle="Year-over-year analysis">
  <div class="grid-2">
    <ComparisonCard 
      title="Service Delivery Metrics"
      :items="[
        { label: 'Response Time', value: 2.3, unit: 'days', change: -15, changeType: 'increase' },
        { label: 'Customer Satisfaction', value: 4.1, unit: '/5.0', change: 8, changeType: 'increase' },
        { label: 'Processing Time', value: 5.7, unit: 'hours', change: -22, changeType: 'increase' }
      ]"
      :show-chart="true"
    />
    <ComparisonCard 
      title="Operational Efficiency"
      :items="[
        { label: 'Cost per Transaction', value: 12.50, unit: '$', change: -18, changeType: 'increase' },
        { label: 'Error Rate', value: 0.8, unit: '%', change: -35, changeType: 'increase' },
        { label: 'Automation Level', value: 73, unit: '%', change: 12, changeType: 'increase' }
      ]"
      :show-chart="true"
    />
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Key Insights & Recommendations" subtitle="Strategic guidance for next steps">
  <div class="space-y-6">
    <div class="callout-success">
      <strong class="text-green-700 dark:text-green-400">Strengths</strong>
      <div class="text-gray-600 dark:text-gray-300 mt-2">
        Strong budget utilization and high citizen satisfaction scores indicate effective service delivery and resource management.
      </div>
    </div>
    <div class="callout-warning">
      <strong class="text-yellow-700 dark:text-yellow-400">Areas for Improvement</strong>
      <div class="text-gray-600 dark:text-gray-300 mt-2">
        Project completion rates have decreased slightly, suggesting potential resource allocation challenges that need attention.
      </div>
    </div>
    <div class="callout">
      <strong class="text-blue-700 dark:text-blue-400">Recommendations</strong>
      <div class="text-gray-600 dark:text-gray-300 mt-2">
        Focus on streamlining project management processes and consider additional training for project teams to improve completion rates.
      </div>
    </div>
  </div>
</ContentSlide>

---
layout: section
---

<SectionSlide 
  title="Next Steps"
  subtitle="Action items and future planning"
  :section-number="6"
  :total-sections="6"
/>

---
layout: default
---

<ContentSlide title="Action Plan" subtitle="Immediate next steps and timeline">
  <div class="space-y-3">
    <div class="card">
      <div class="flex items-center space-x-3">
        <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
        <div>
          <h3 class="font-semibold text-blue-700 dark:text-blue-300 text-sm">Review Project Management Processes</h3>
          <p class="text-gray-600 dark:text-gray-400 text-xs">Timeline: 2 weeks</p>
        </div>
      </div>
    </div> 
    <div class="card">
      <div class="flex items-center space-x-3">
        <div class="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
        <div>
          <h3 class="font-semibold text-blue-700 dark:text-blue-300 text-sm">Implement Training Program</h3>
          <p class="text-gray-600 dark:text-gray-400 text-xs">Timeline: 4 weeks</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center space-x-3">
        <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
        <div>
          <h3 class="font-semibold text-blue-700 dark:text-blue-300 text-sm">Monitor Performance Metrics</h3>
          <p class="text-gray-600 dark:text-gray-400 text-xs">Timeline: Ongoing</p>
        </div>
      </div>
    </div>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Progress Tracking" subtitle="Current implementation status">
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Overall Project Progress</h3>
      <ProgressIndicator :current="3" :total="5" color="primary" />
    </div>
    <div>
      <h3 class="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Budget Utilization</h3>
      <ProgressIndicator :current="23" :total="50" color="success" />
    </div>
    <div>
      <h3 class="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Team Training Completion</h3>
      <ProgressIndicator :current="65" :total="100" color="warning" />
    </div>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Questions & Discussion" subtitle="Open floor for questions and feedback">
  <div class="text-center py-8">
    <div class="text-5xl mb-4">❓</div>
    <h2 class="text-2xl font-light text-gray-900 dark:text-gray-100 mb-3">Questions & Discussion</h2>
    <p class="text-gray-600 dark:text-gray-400">We welcome your questions and feedback on this presentation.</p>
  </div>
</ContentSlide>

---
layout: default
---

<ContentSlide title="Code Walkthrough Example" subtitle="Interactive code exploration" :show-header="false">
  <CodeWalkthrough
    :show-title="false"
    title="Vue Component Structure"
    language="typescript"
    code-file="/snippets/vue-component-example.txt"
    :blocks="[
      {
        id: 'props',
        startLine: 3,
        endLine: 6,
        title: 'TypeScript Props Interface',
        description: 'Define the component props with TypeScript for type safety and better developer experience.',
        highlightColor: 'blue'
      },
      {
        id: 'reactive',
        startLine: 8,
        endLine: 8,
        title: 'Reactive State',
        description: 'Use ref() to create reactive state that will trigger re-renders when changed.',
        highlightColor: 'green'
      },
      {
        id: 'computed',
        startLine: 10,
        endLine: 14,
        title: 'Computed Properties',
        description: 'Computed properties automatically update when their dependencies change, perfect for derived state.',
        highlightColor: 'yellow'
      },
      {
        id: 'template',
        startLine: 18,
        endLine: 30,
        title: 'Template with Directives',
        description: 'Vue template syntax with v-model, v-for, and event handling for reactive UI.',
        highlightColor: 'purple'
      }
    ]"
    :auto-advance="false"
    :auto-advance-delay="4000"
  />
</ContentSlide>

---
layout: default
---

<ContentSlide title="Thank You" subtitle="Contact information and next steps">
  <div class="text-center py-6">
    <div class="text-5xl mb-4">🙏</div>
    <h2 class="text-2xl font-light text-gray-900 dark:text-gray-100 mb-3">Thank You</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-4">For your time and attention today.</p>
    <div class="grid-2 max-w-2xl mx-auto gap-4">
      <div class="card">
        <h3 class="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">Contact Information</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">your.email@organization.gov</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm">(555) 123-4567</p>
      </div>
      <div class="card">
        <h3 class="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">Follow-up</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Next meeting: TBD</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Action items: 3</p>
      </div>
    </div>
  </div>
</ContentSlide>
