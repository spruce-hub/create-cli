export const useResize = () => {
  const clientWidth = ref(0)
  const clientHeight = ref(0)

  const update = () => {
    clientWidth.value = document.body.clientWidth
    clientHeight.value = document.documentElement.clientHeight
  }

  onMounted(() => update())
  onMounted(() => window.addEventListener('resize', update, false))
  onUnmounted(() => window.removeEventListener('resize', update, false))

  return { clientWidth, clientHeight }
}

export const useScroll = () => {
  let scrollTemp = 0
  const scrollTop = ref(0)
  const scrollWheel = ref<'top' | 'bottom' | null>(null)
  const getScroll = () => {
    scrollTop.value = window.scrollY
    scrollWheel.value = window.scrollY - scrollTemp > 0 ? 'bottom' : 'top'
  }

  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        getScroll()
        scrollTemp = window.scrollY
        ticking = false
      })

      ticking = true
    }
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, false))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll, false))
  return { scrollTop, scrollWheel }
}
