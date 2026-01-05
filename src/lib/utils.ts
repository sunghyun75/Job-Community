import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const ComfortMessage = [
  '우리가 할 수 있는 최선을 다할 때, 우리 혹은 타인의 삶에 어떤 기적이 나타나는 지 아무도 모른다.',
  '절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
  '항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.',
  '인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데.',
  '같은 실수를 두려워하되, 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.',
  '진정으로 웃으려면 고통을 참을 줄 알아야하며, 나아가 고통을 즐길 줄 알아야 해.',
  '인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다',
  '별은 바라보는 자에게 빛을 준다.',
  '실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.',
  '1퍼센트의 가능성, 그게 나의 길이다.',
  '나 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.',
  '겨울이 오면 봄이 멀지 않으리',
  '내일을 위한 준비는 오늘 최선을 다하는 것입니다.',
  '자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.',
];

export const wiseSaying = () => {
  const today = new Date();

  const messageInterval = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

  return ComfortMessage[messageInterval % ComfortMessage.length];
};
