export const getListItemAnimationClass = (index: number) => {
  const classes = [
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[200ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[400ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[600ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[800ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1000ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1200ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1400ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1600ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[1800ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[2000ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[2200ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[2400ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[2600ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[2800ms]",
    "intersect:motion-preset-slide-left intersect:motion-ease-spring-bouncier intersect:motion-delay-[3000ms]",
  ];
  return classes[index] || classes[0];
};
