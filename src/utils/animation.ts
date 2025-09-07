export const getListItemAnimationClass = (index: number) => {
  const classes = [
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[100ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[200ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[300ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[400ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[500ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[600ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[700ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[800ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[900ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1000ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1100ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1200ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1300ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1400ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1500ms]",
  ];
  return classes[index] || classes[0];
};
