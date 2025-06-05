import { createRouter, createWebHistory } from 'vue-router'

// Import views
import DeclarativeRendering from '../views/DeclarativeRendering.vue'
import AttributeBindings from '../views/AttributeBindings.vue'
import EventListeners from '../views/EventListeners.vue'
import FormBindings from '../views/FormBindings.vue'
import ConditionalRendering from '../views/ConditionalRendering.vue'
import ListRendering from '../views/ListRendering.vue'
import ComputedProperties from '../views/ComputedProperties.vue'
import LifecycleAndRefs from '../views/LifecycleAndRefs.vue'
import Watchers from '../views/Watchers.vue'

// Define routes
const routes = [
  {
    path: '/',
    redirect: '/declarative-rendering'
  },
  {
    path: '/declarative-rendering',
    name: 'DeclarativeRendering',
    component: DeclarativeRendering,
    meta: {
      title: 'Declarative Rendering'
    }
  },
  {
    path: '/attribute-bindings',
    name: 'AttributeBindings',
    component: AttributeBindings,
    meta: {
      title: 'Attribute Bindings'
    }
  },
  {
    path: '/event-listeners',
    name: 'EventListeners',
    component: EventListeners,
    meta: {
      title: 'Event Listeners'
    }
  },
  {
    path: '/form-bindings',
    name: 'FormBindings',
    component: FormBindings,
    meta: {
      title: 'Form Bindings'
    }
  },
  {
    path: '/conditional-rendering',
    name: 'ConditionalRendering',
    component: ConditionalRendering,
    meta: {
      title: 'Conditional Rendering'
    }
  },
  {
    path: '/list-rendering',
    name: 'ListRendering',
    component: ListRendering,
    meta: {
      title: 'List Rendering'
    }
  },
  {
    path: '/computed-properties',
    name: 'ComputedProperties',
    component: ComputedProperties,
    meta: {
      title: 'Computed Properties'
    }
  },
  {
    path: '/lifecycle-and-refs',
    name: 'LifecycleAndRefs',
    component: LifecycleAndRefs,
    meta: {
      title: 'Lifecycle & Template Refs'
    }
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers,
    meta: {
      title: 'Watchers'
    }
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 }
  }
})

// Update page title based on route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Vue Learning Platform` : 'Vue Learning Platform'
  next()
})

export default router