import React from 'react';
import { JSX } from '../..';
import { GeovToc, IonCol, IonRow } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Design Components/Toc',
  component: GeovToc,
};

const content = (
  <div>
    <h1 id="welcome">
      Welcome <small>you!</small>
    </h1>
    <h2 id="1-title">1. Title</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
      architecto totam sit tempora! A sunt repellat officiis.
    </p>
    <h2 id="2-title">2. Title</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
      architecto totam sit tempora! A sunt repellat officiis.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
      architecto totam sit tempora! A sunt repellat officiis.
    </p>
    <div>
      <h2>2.1 Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <h3 id="2-1-1-title">2.1.1 Title</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
    </div>
    <h2>3. Title</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
      architecto totam sit tempora! A sunt repellat officiis.
    </p>
  </div>
);

const Template = (args: JSX.GeovToc) => (
  <div>
    <h1 id="welcome">
      Welcome <small>you!</small>
    </h1>
    <GeovToc>
      <h2 id="1-title">1. Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <h2 id="2-title">2. Title this is a very long title, what happens here?</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <div>
        <h2>2.1 Title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
          architecto totam sit tempora! A sunt repellat officiis.
        </p>
        <h3 id="2-1-1-title">2.1.1 Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
          architecto totam sit tempora! A sunt repellat officiis.
        </p>
      </div>
      <h2>3. Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
    </GeovToc>
  </div>
);

export const Toc = Template.bind({});
const args1: JSX.GeovToc = {
  reactElement: content,
};
Toc.args = args1;
