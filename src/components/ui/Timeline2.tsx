import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import '../styles/styles.css';

export interface Item {
  title: string;
  date: string;
  description: string;
  icon: string;
  image: string;
  classes?: Record<string, string>;
}

export interface Props {
  items?: Array<Item>;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

// const { items = [], classes = {}, defaultIcon } = Astro.props as Props;

const {
  container: containerClass = 'container',
  panel: panelClass = 'panel',
  title: titleClass = '',
  date: dateClass = '',
  description: descriptionClass = '',
  image: imageClass = 'image',
  icon: defaultIconClass = 'icon',
} = classes;

const Timeline2 = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const itemHeight = container.children[0].clientHeight;
        const index = Math.round(scrollTop / itemHeight);
        setActiveIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={containerRef} class={twMerge(containerClass)}>
      {items.map(({ title, date, description, icon, classes: itemClasses = {}, image }, index) => (
        <div
          key={index}
          class={twMerge(
            'flex',
            panelClass,
            itemClasses?.panel,
            index === activeIndex ? 'large' : 'small'
          )}
        >
          <div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4 w-1/6">
            <div class="flex">
              {(icon || defaultIcon) && (
                <Icon
                  name={icon || defaultIcon}
                  class={twMerge('w-10 h-10 p-2 rounded-full border-2', defaultIconClass, itemClasses?.icon)}
                />
              )}
            </div>
            {index !== items.length - 1 && <div class="w-px h-full bg-black/10 dark:bg-slate-400/50" />}
          </div>
          <div class={twMerge('max-w-screen-xl box-border grid md:grid-cols-2', itemClasses?.panel)}>
            <div>
              {title && <p class={twMerge('text-xl font-bold', titleClass, itemClasses?.title)} set:html={title} />}
              {date && <p class={twMerge('text-xl font-bold', dateClass, itemClasses?.date)} set:html={date} />}
              {description && (
                <p class={twMerge('text-muted mt-2', descriptionClass, itemClasses?.description)} set:html={description} />
              )}
            </div>
            {image && (
              <a class="relative md:basis-1/2">
                <div class={twMerge(imageClass)}>
                  {typeof image === 'string' ? (
                    <Fragment set:html={image} />
                  ) : (
                    <Image
                      class="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
                      widths={[400, 768]}
                      sizes="(max-width: 768px) 100vw, 432px"
                      width={609}
                      height={360}
                      layout="cover"
                      src={image?.src}
                      alt={image?.alt}
                      aspectRatio="16:9"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline2;
