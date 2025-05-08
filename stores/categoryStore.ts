import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDataTransformer } from '@/composables/useDataTransformer';

export const useCategoryStore = defineStore('categoryStore', () => {
  const { transformCategories } = useDataTransformer();

  const rawCategories = [
    { id: 1, name: '🏋️‍♂️', value: 'Fitness 🏋️‍♂️' },
    { id: 2, name: '🎨', value: 'Creativity 🎨' },
    { id: 3, name: '📈', value: 'Productivity 📈' },
    { id: 4, name: '🌍', value: 'Adventure 🌍' },
    { id: 5, name: '👫', value: 'Social 👫' },
    { id: 6, name: '🧘', value: 'Wellness 🧘' },
    { id: 7, name: '📚', value: 'Knowledge 📚' },
    { id: 8, name: '🎲', value: 'Random Fun 🎲' },
  ];

  const categories = transformCategories(rawCategories);

  // Save selected category to localStorage
  const setSelectedCategory = (category: string) => {
    localStorage.setItem('categoryValue', JSON.stringify(category));
  };

  return {
    categories,
    setSelectedCategory,
  };
});