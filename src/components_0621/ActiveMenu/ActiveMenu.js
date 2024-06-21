import { useActiveMenu } from 'react-active-menu';
import './ActiveMenu.css';

export default function App() {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu({
    smooth: true,
  });

  return (
    <>
      <nav className="triggers">
        <ul>
          <li>
            <button ref={registerTrigger('section-1')} type="button">
              Section 1
            </button>
          </li>
          <li>
            <button ref={registerTrigger('section-2')} type="button">
              Section 2
            </button>
          </li>
          <li>
            <button ref={registerTrigger('section-3')} type="button">
              Section 3
            </button>
          </li>
          <li>
            <button ref={registerTrigger('section-4')} type="button">
              Section 4
            </button>
          </li>
          <li>
            <button ref={registerTrigger('section-5')} type="button">
              Section 5
            </button>
          </li>
          <li>
            <button ref={registerTrigger('section-6')} type="button">
              Section 6
            </button>
          </li>
        </ul>
      </nav>
      <div className="sections" ref={registerContainer}>
        <section ref={registerSection('section-1')}>
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
        <section ref={registerSection('section-2')}>
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
        <section ref={registerSection('section-3')}>
          <h2>Section 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
        <section ref={registerSection('section-4')}>
          <h2>Section 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
        <section ref={registerSection('section-5')}>
          <h2>Section 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
        <section ref={registerSection('section-6')}>
          <h2>Section 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nulla eu mauris pellentesque, vitae posuere orci facilisis. Nam viverra ligula ultrices sem
            feugiat tempus. In hac habitasse platea dictumst. Nulla interdum est ut orci semper, id interdum dolor venenatis. Suspendisse leo purus, vulputate dapibus sem eu,
            lacinia sagittis sapien. Sed pellentesque, elit vitae finibus sollicitudin, orci purus ullamcorper justo, vitae faucibus tellus ipsum a eros. Duis iaculis auctor
            tortor, finibus ornare dolor molestie in. Suspendisse potenti. Nullam at faucibus lorem. Duis fermentum ut nisi et volutpat. Curabitur nec sollicitudin dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci orci, tincidunt eu eros ac, tincidunt dignissim est. Curabitur
            luctus leo nec felis ultrices, at malesuada orci malesuada. Aliquam quis vehicula urna.
          </p>
          <p>
            In euismod lorem neque, vitae fringilla ipsum tempor id. Nulla ultricies ex vitae varius imperdiet. Aenean eget felis fermentum, mollis nisl quis, hendrerit nulla. Cras
            posuere hendrerit tortor sit amet commodo. Sed non fringilla libero. Duis nec ipsum nec velit suscipit blandit a non nisl. Pellentesque euismod sapien vitae nisl
            elementum dignissim. Etiam consequat quis eros eget elementum. Nam ipsum libero, rhoncus id posuere ac, gravida ac felis. In sagittis condimentum leo, ut porta metus
            iaculis nec. Duis nunc est, ornare viverra nisl id, eleifend porttitor quam.
          </p>
          <p>
            Donec laoreet porta ante, ornare pellentesque quam facilisis eu. Sed et urna sit amet diam imperdiet rutrum. Fusce vitae sem ultrices, scelerisque risus eget, semper
            tellus. Maecenas auctor risus ac cursus tristique. Maecenas luctus ornare leo, eget auctor metus efficitur at. Morbi sagittis augue ipsum, non rhoncus mauris lacinia
            ac. Nulla facilisi. Vestibulum pellentesque elementum ipsum, et ultrices nisl aliquet sit amet. Integer euismod luctus sem luctus elementum. Curabitur accumsan non urna
            sit amet luctus. Nam egestas viverra augue sit amet sodales.
          </p>
        </section>
      </div>
    </>
  );
}
