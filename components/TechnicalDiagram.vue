<script setup lang="ts">
interface Props {
  type: 'architecture' | 'data-flow' | 'caching' | 'retry-strategy'
  title?: string
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  data: null
})
</script>

<template>
  <div class="technical-diagram">
    <h3 v-if="props.title" class="diagram-title">{{ props.title }}</h3>
    
    <!-- Architecture Diagram -->
    <div v-if="props.type === 'architecture'" class="architecture-diagram">
      <div class="layer presentation-layer">
        <h3 class="layer-title">Presentation Layer</h3>
        <div class="layer-components">
          <div class="component">Nunjucks Templates</div>
          <div class="component">Static Assets (SCSS/JS)</div>
          <div class="component">Middleware (Auth, CSRF)</div>
        </div>
      </div>
      
      <div class="layer application-layer">
        <h3 class="layer-title">Application Layer</h3>
        <div class="layer-components">
          <div class="component">Controllers (Business Logic)</div>
          <div class="component">Services (Data Aggregation)</div>
          <div class="component">Routes (Request Routing)</div>
        </div>
      </div>
      
      <div class="layer data-layer">
        <h3 class="layer-title">Data Layer</h3>
        <div class="layer-components">
          <div class="component">API Clients (External Services)</div>
          <div class="component">Data Stores (Redis, In-Memory)</div>
          <div class="component">Caching (Reference Data)</div>
        </div>
      </div>
    </div>
    
    <!-- Data Flow Diagram -->
    <div v-if="props.type === 'data-flow'" class="data-flow-diagram">
      <div class="flow-center">
        <div class="service-orchestrator">
          <h3>Service Orchestration</h3>
          <p>PersonalPageService.get()</p>
        </div>
      </div>
      
      <div class="api-calls">
        <div class="api-call prison-api">
          <div class="api-icon">🏢</div>
          <div class="api-name">Prison API</div>
          <div class="api-desc">Basic prisoner info</div>
        </div>
        
        <div class="api-call person-api">
          <div class="api-icon">👤</div>
          <div class="api-name">Person Integration</div>
          <div class="api-desc">Personal details</div>
        </div>
        
        <div class="api-call curious-api">
          <div class="api-icon">📚</div>
          <div class="api-name">Curious API</div>
          <div class="api-desc">Education/work data</div>
        </div>
        
        <div class="api-call alerts-api">
          <div class="api-icon">⚠️</div>
          <div class="api-name">Alerts API</div>
          <div class="api-desc">Prisoner alerts</div>
        </div>
        
        <div class="api-call health-api">
          <div class="api-icon">🏥</div>
          <div class="api-name">Health API</div>
          <div class="api-desc">Medical information</div>
        </div>
      </div>
      
      <div class="flow-result">
        <div class="result-box">
          <h3>Aggregated Response</h3>
          <p>Unified prisoner profile</p>
        </div>
      </div>
    </div>
    
    <!-- Caching Diagram -->
    <div v-if="props.type === 'caching'" class="caching-diagram">
      <div class="cache-levels">
        <div class="cache-level reference-cache">
          <div class="cache-icon">📚</div>
          <h3>Reference Data Cache</h3>
          <div class="cache-details">
            <div class="cache-ttl">TTL: 1 hour</div>
            <div class="cache-purpose">Dropdown options, lookup tables</div>
            <div class="cache-key">reference_data_{domain}</div>
          </div>
        </div>
        
        <div class="cache-level ephemeral-cache">
          <div class="cache-icon">⏰</div>
          <h3>Ephemeral Data Cache</h3>
          <div class="cache-details">
            <div class="cache-ttl">TTL: 6 hours default</div>
            <div class="cache-purpose">Temporary form data, intermediate results</div>
            <div class="cache-key">ephemeral:{uuid}</div>
          </div>
        </div>
        
        <div class="cache-level session-cache">
          <div class="cache-icon">🔐</div>
          <h3>Session Cache</h3>
          <div class="cache-details">
            <div class="cache-ttl">TTL: 120 minutes</div>
            <div class="cache-purpose">User sessions, authentication state</div>
            <div class="cache-key">Session-based</div>
          </div>
        </div>
      </div>
      
      <div class="cache-storage">
        <div class="storage-option primary">
          <h4>Primary: Redis</h4>
          <p>Production performance</p>
        </div>
        <div class="storage-option fallback">
          <h4>Fallback: In-Memory</h4>
          <p>Development flexibility</p>
        </div>
      </div>
    </div>
    
    <!-- Retry Strategy Diagram -->
    <div v-if="props.type === 'retry-strategy'" class="retry-strategy">
      <div class="retry-config">
        <div class="retry-item">
          <div class="retry-label">Default Retry Count</div>
          <div class="retry-value">2 retries</div>
        </div>
        <div class="retry-item">
          <div class="retry-label">Retry Logic</div>
          <div class="retry-value">Built into RestClient</div>
        </div>
        <div class="retry-item">
          <div class="retry-label">Timeout Handling</div>
          <div class="retry-value">Configurable per API</div>
        </div>
        <div class="retry-item">
          <div class="retry-label">Exponential Backoff</div>
          <div class="retry-value">20ms, 40ms, 80ms... (capped at 30s)</div>
        </div>
      </div>
      
      <div class="retry-flow">
        <div class="flow-step">API Call</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Success?</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Retry Count < 2?</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Wait & Retry</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Error Handler</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technical-diagram {
  @apply w-full;
}

.diagram-title {
  @apply text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center;
}

/* Visual Architecture Styles */
.visual-architecture {
  @apply space-y-6;
}

.arch-layer {
  @apply border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg;
}

.presentation-layer {
  @apply border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20;
}

.application-layer {
  @apply border-green-200 bg-gradient-to-r from-green-50 to-green-100 dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20;
}

.data-layer {
  @apply border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 dark:border-purple-800 dark:from-purple-900/20 dark:to-purple-800/20;
}

.layer-header {
  @apply flex items-center space-x-3 mb-4;
}

.layer-icon {
  @apply text-2xl;
}

.layer-title {
  @apply text-lg font-bold;
}

.presentation-layer .layer-title {
  @apply text-blue-700 dark:text-blue-300;
}

.application-layer .layer-title {
  @apply text-green-700 dark:text-green-300;
}

.data-layer .layer-title {
  @apply text-purple-700 dark:text-purple-300;
}

.layer-components {
  @apply grid grid-cols-1 md:grid-cols-3 gap-3;
}

.component-card {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-3 flex items-center space-x-3 transition-all duration-200 hover:shadow-md hover:scale-105;
}

.component-icon {
  @apply text-lg flex-shrink-0;
}

.component-text {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300;
}

/* Legacy Architecture Diagram Styles (for backward compatibility) */
.architecture-diagram {
  @apply space-y-4;
}

.layer {
  @apply border-2 rounded-lg p-6 transition-all duration-300;
}

.presentation-layer {
  @apply border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20;
}

.application-layer {
  @apply border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20;
}

.data-layer {
  @apply border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20;
}

.layer-title {
  @apply text-lg font-semibold mb-4 text-center;
}

.presentation-layer .layer-title {
  @apply text-blue-700 dark:text-blue-300;
}

.application-layer .layer-title {
  @apply text-green-700 dark:text-green-300;
}

.data-layer .layer-title {
  @apply text-purple-700 dark:text-purple-300;
}

.layer-components {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4;
}

.component {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300;
}

/* Data Flow Diagram Styles */
.data-flow-diagram {
  @apply relative;
}

.flow-center {
  @apply flex justify-center mb-8;
}

.service-orchestrator {
  @apply bg-blue-600 text-white rounded-lg p-6 text-center shadow-lg;
}

.service-orchestrator h3 {
  @apply text-lg font-semibold mb-2;
}

.service-orchestrator p {
  @apply text-sm opacity-90;
}

.api-calls {
  @apply grid grid-cols-2 md:grid-cols-5 gap-4 mb-8;
}

.api-call {
  @apply bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg;
}

.api-icon {
  @apply text-3xl mb-2;
}

.api-name {
  @apply font-semibold text-gray-900 dark:text-white mb-1;
}

.api-desc {
  @apply text-xs text-gray-600 dark:text-gray-400;
}

.flow-result {
  @apply flex justify-center;
}

.result-box {
  @apply bg-green-600 text-white rounded-lg p-6 text-center shadow-lg;
}

.result-box h3 {
  @apply text-lg font-semibold mb-2;
}

.result-box p {
  @apply text-sm opacity-90;
}

/* Caching Diagram Styles */
.caching-diagram {
  @apply space-y-6;
}

.cache-levels {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.cache-level {
  @apply bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center;
}

.cache-icon {
  @apply text-4xl mb-4;
}

.cache-level h3 {
  @apply text-lg font-semibold text-gray-900 dark:text-white mb-4;
}

.cache-details {
  @apply space-y-2;
}

.cache-ttl {
  @apply text-sm font-medium text-blue-600 dark:text-blue-400;
}

.cache-purpose {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.cache-key {
  @apply text-xs font-mono bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-gray-700 dark:text-gray-300;
}

.cache-storage {
  @apply flex justify-center space-x-8;
}

.storage-option {
  @apply text-center;
}

.storage-option h4 {
  @apply font-semibold text-gray-900 dark:text-white mb-1;
}

.storage-option p {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.storage-option.primary h4 {
  @apply text-green-600 dark:text-green-400;
}

.storage-option.fallback h4 {
  @apply text-orange-600 dark:text-orange-400;
}

/* Retry Strategy Styles */
.retry-strategy {
  @apply space-y-8;
}

.retry-config {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.retry-item {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4;
}

.retry-label {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300 mb-1;
}

.retry-value {
  @apply text-sm font-semibold text-blue-600 dark:text-blue-400;
}

.retry-flow {
  @apply flex flex-col items-center space-y-2;
}

.flow-step {
  @apply bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium;
}

.flow-arrow {
  @apply text-2xl text-gray-400;
}
</style>
