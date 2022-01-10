import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import BodyText, { BodyTextProps } from '../bodyText';
import ReactMarkdown from 'react-markdown';

export default {
  title: 'Blog/Components/Post/BodyText',
  component: BodyText,
  decorators: [
    (Story) => (
      <ReactMarkdown>

          ""
      </ReactMarkdown>
    ),
  ],
} as Meta;

const Template: Story<BodyTextProps> = (args) => <BodyText {...args} />;

export const BasicWithBold = Template.bind({});
BasicWithBold.args = {
  Text:
    'Here is my first post about my blog \n\n**Lorem ipsum dolor** sit amet, consectetur adipiscing elit.\n',
};

export const WithImage = Template.bind({});
WithImage.args = {
  Text:
    'Here is my first post about my blog \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ultrices urna, vestibulum laoreet diam. Quisque laoreet pretium nisl, non ultricies lacus laoreet id. Duis interdum purus nisl, sed dictum elit bibendum quis. In aliquam ex vitae urna sodales, quis sagittis dui viverra. Vestibulum mattis ligula odio, ut eleifend tortor sagittis sit amet. Vivamus vestibulum sem et suscipit interdum. Vestibulum non facilisis velit. Mauris eget vehicula diam. Etiam a laoreet ex, laoreet condimentum leo. Aliquam a tristique sem. Nam quis quam ut nulla porta dignissim ac sed lorem. Suspendisse dictum nisi quam, ut elementum orci consectetur a.\n\n![cover.jpg](https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg)\n\nAliquam non arcu a nulla aliquam fermentum. Quisque tortor lorem, pellentesque fringilla dolor suscipit, ultricies feugiat erat. Morbi eget eros et turpis blandit tempor. Nunc sit amet pulvinar tellus. Aenean lacinia vulputate arcu a venenatis. Proin vitae faucibus ante. Donec lobortis consectetur hendrerit. Donec ornare a diam non tempus. Sed eros elit, volutpat eget varius ac, imperdiet id tortor. Etiam ut molestie justo. Donec pulvinar interdum purus sit amet elementum. Vestibulum consectetur et dui ac ullamcorper.\n\nPellentesque bibendum enim id enim feugiat, ut lobortis elit lobortis. Sed ornare feugiat posuere. Cras vehicula efficitur dignissim. Vestibulum malesuada gravida neque, sit amet ultricies eros mollis sed. Pellentesque sit amet nisl in neque pretium vestibulum lacinia sit amet augue. Donec maximus elit eu convallis varius. In maximus in orci eu dapibus. Curabitur sed rutrum mauris. Nam sagittis ipsum at libero tincidunt, non sagittis nisl placerat. Aenean efficitur vitae augue vel sollicitudin. Etiam eget mauris rhoncus, blandit leo eu, porta augue. Curabitur porta at ipsum at scelerisque. Vivamus porta tellus est, id elementum tortor semper id.',
};

export const WithCode = Template.bind({});
WithCode.args = {
  Text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis leo ac posuere consequat. Aliquam erat volutpat. Vivamus laoreet augue viverra ipsum dapibus dignissim vitae in risus. Donec varius volutpat turpis sit amet auctor. Fusce nec mi nec mi interdum bibendum sit amet et justo. Sed dictum, libero in viverra efficitur, ante sem convallis dolor, eu fermentum felis felis vitae diam. Curabitur eget elementum risus, sed vulputate est.\n\n``` \n<html>\n  <p>{Lorem ipsum dolor sit amet}</p>, \n    <div>\n      <p>consectetur adipiscing elit. Suspendisse lobortis leo ac</p>\n     </div>\n</html>\n\n```\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis leo ac posuere consequat. Aliquam erat volutpat. Vivamus laoreet augue viverra ipsum dapibus dignissim vitae in risus. Donec varius volutpat turpis sit amet auctor. Fusce nec mi nec mi interdum bibendum sit amet et justo. Sed dictum, libero in viverra efficitur, ante sem convallis dolor, eu fermentum felis felis vitae diam. Curabitur eget elementum risus, sed vulputate est.',
};

export const WithLink = Template.bind({});
WithLink.args = {
  Text:
    'Here is my first post about my blog \n\n sit amet, [consectetur](https://bbc.co.uk) adipiscing elit.\n',
};


