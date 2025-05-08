import { defineStore } from 'pinia';
import { useDataTransformer } from '@/composables/useDataTransformer';

export const useChallengeStore = defineStore('challengeStore', () => {

  const { transformChallenges } = useDataTransformer();
  const selectedChallenge = ref<String>('')

  // Raw challenges for all categories
  const rawChallenges = [
    {
      category: 'Fitness 🏋️‍♂️',
      tasks: [
        { id: 1, name: '💪', value: 'Do 20 push-ups 💪' },
        { id: 2, name: '🏃', value: 'Run or jog for 15 minutes 🏃' },
        { id: 3, name: '🧘‍♂️', value: 'Hold a plank for 1 minute 🧘‍♂️' },
        { id: 4, name: '🤸', value: 'Do 30 jumping jacks 🤸' },
        { id: 5, name: '🧘', value: 'Stretch for 10 minutes 🧘' },
        { id: 6, name: '🏋️', value: 'Perform 10 burpees 🏋️' },
        { id: 7, name: '🪜', value: 'Climb stairs for 5 minutes 🪜' },
        { id: 8, name: '🏋️‍♂️', value: 'Try a yoga pose for 2 minutes 🏋️‍♂️' },
      ],
    },
    {
      category: 'Creativity 🎨',
      tasks: [
        { id: 1, name: '🎨', value: 'Draw something in 10 minutes 🎨' },
        { id: 2, name: '✍️', value: 'Write a short poem ✍️' },
        { id: 3, name: '📸', value: 'Take a photo of something inspiring 📸' },
        { id: 4, name: '🖌️', value: 'Create a quick doodle 🖌️' },
        { id: 5, name: '🎶', value: 'Make a short melody or hum a tune 🎶' },
        { id: 6, name: '🖊️', value: 'Try writing with your non-dominant hand 🖊️' },
        { id: 7, name: '🌈', value: 'Decorate your workspace with colors 🌈' },
        { id: 8, name: '🖍️', value: 'Design a logo for something fun 🖍️' },
      ],
    },
    {
      category: 'Productivity 📈',
      tasks: [
        { id: 1, name: '📂', value: 'Organize your desktop or workspace 📂' },
        { id: 2, name: '📅', value: 'Plan tomorrow’s schedule 📅' },
        { id: 3, name: '📝', value: 'Write down 3 goals for the week 📝' },
        { id: 4, name: '📬', value: 'Unsubscribe from 5 unused newsletters 📬' },
        { id: 5, name: '⏳', value: 'Complete a small task you’ve been delaying ⏳' },
        { id: 6, name: '🧠', value: 'Spend 10 minutes learning a new skill 🧠' },
        { id: 7, name: '🛋️', value: 'Declutter one drawer or shelf 🛋️' },
        { id: 8, name: '✉️', value: 'Clean up your email inbox ✉️' },
      ],
    },
    {
      category: 'Adventure 🌍',
      tasks: [
        { id: 1, name: '🌳', value: 'Explore a park nearby 🌳' },
        { id: 2, name: '☕', value: 'Try a new coffee shop ☕' },
        { id: 3, name: '🚶', value: 'Take a walk in a neighborhood you’ve never visited 🚶' },
        { id: 4, name: '🚗', value: 'Plan a weekend road trip 🚗' },
        { id: 5, name: '🎥', value: 'Watch a documentary about a new culture 🎥' },
        { id: 6, name: '🍜', value: 'Try cooking a dish from another country 🍜' },
        { id: 7, name: '📍', value: 'Write a list of places you want to visit 📍' },
        { id: 8, name: '🌌', value: 'Go outside and look at the stars 🌌' },
      ],
    },
    {
      category: 'Social 👫',
      tasks: [
        { id: 1, name: '📞', value: 'Call a family member or a friend 📞' },
        { id: 2, name: '😊', value: 'Compliment someone today 😊' },
        { id: 3, name: '💌', value: 'Send a kind message to an old friend 💌' },
        { id: 4, name: '😄', value: 'Smile at a stranger while walking 😄' },
        { id: 5, name: '🌟', value: 'Share something inspiring on social media 🌟' },
        { id: 6, name: '☕', value: 'Meet someone for coffee or tea ☕' },
        { id: 7, name: '🎲', value: 'Play a game with friends 🎲' },
        { id: 8, name: '👋', value: 'Introduce yourself to someone new 👋' },
      ],
    },
    {
      category: 'Wellness 🧘',
      tasks: [
        { id: 1, name: '🧘', value: 'Meditate for 5 minutes 🧘' },
        { id: 2, name: '💧', value: 'Drink 8 glasses of water today 💧' },
        { id: 3, name: '🖋️', value: 'Journal about your thoughts for 10 minutes 🖋️' },
        { id: 4, name: '🌬️', value: 'Practice deep breathing for 2 minutes 🌬️' },
        { id: 5, name: '😴', value: 'Take a 30-minute nap 😴' },
        { id: 6, name: '🌈', value: 'Write 3 things you’re grateful for 🌈' },
        { id: 7, name: '📵', value: 'Avoid screens for 1 hour 📵' },
        { id: 8, name: '🕯️', value: 'Light a candle and relax 🕯️' },
      ],
    },
    {
      category: 'Knowledge 📚',
      tasks: [
        { id: 1, name: '📖', value: 'Read 10 pages of a book 📖' },
        { id: 2, name: '🗣️', value: 'Learn a new word and its meaning 🗣️' },
        { id: 3, name: '🎥', value: 'Watch a TED Talk or educational video 🎥' },
        { id: 4, name: '🧩', value: 'Solve a Sudoku or crossword puzzle 🧩' },
        { id: 5, name: '🌐', value: 'Research a topic you’re curious about 🌐' },
        { id: 6, name: '📝', value: 'Write down 5 interesting facts 📝' },
        { id: 7, name: '🧠', value: 'Try a brain-training app for 10 minutes 🧠' },
        { id: 8, name: '🗒️', value: 'Share something you’ve learned with a friend 🗒️' },
      ],
    },
    {
      category: 'Random Fun 🎲',
      tasks: [
        { id: 1, name: '💃', value: 'Dance to your favorite song 💃' },
        { id: 2, name: '🤣', value: 'Tell a joke to someone 🤣' },
        { id: 3, name: '🦵', value: 'Try balancing on one leg for 30 seconds 🦵' },
        { id: 4, name: '❓', value: 'Play a guessing game with a friend ❓' },
        { id: 5, name: '😜', value: 'Make a funny face in the mirror 😜' },
        { id: 6, name: '👀', value: 'Try drawing with your eyes closed 👀' },
        { id: 7, name: '🎥', value: 'Find a random YouTube video and watch it 🎥' },
        { id: 8, name: '🤪', value: 'Spin in a circle 10 times and try to walk straight 🤪' },
      ],
    },
  ];

  // State
  const challenges = ref([]);

  // Actions
  const setCategory = () => {
    const savedCategory = localStorage.getItem('categoryValue');
    if (savedCategory){
      const category = JSON.parse(savedCategory);
      // Find raw challenges for the selected category
      const raw = rawChallenges.find((c) => c.category === category);
      if (raw) {
        // Transform the challenges for the selected category
        challenges.value = transformChallenges(raw.tasks)
      } else {
        challenges.value = [];
      }
    }
  };

  // Save selected category to localStorage
  const setSelectedChallenge = (challenge: string) => {
    localStorage.setItem('challengeValue', JSON.stringify(challenge));
  };

  const loadLocalStorage = () => {
    const savedChallenge = localStorage.getItem('challengeValue');
    if (savedChallenge){
      selectedChallenge.value = JSON.parse(savedChallenge);
    }
  }
  

  return {
    challenges,
    setCategory,
    setSelectedChallenge,
    selectedChallenge,
    loadLocalStorage
  };
});