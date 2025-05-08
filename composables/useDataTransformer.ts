export const useDataTransformer = () => {
  /**
   * Get alternating colors based on the ID.
   * @param {number} id - The ID of the category or challenge.
   * @returns {Object} - An object with `bgColor` and `color`.
   */
  const getAlternatingColors = (id: number) => ({
    bgColor: id % 2 === 0 ? '#14CC60' : '#fff',
    color: id % 2 === 0 ? '#ffffff' : '#0A2E36',
  });

  /**
   * Calculate probability to sum up to 100%.
   * @param {number} total - Total number of elements.
   * @returns {number} - Probability for each element.
   */
  const calculateProbability = (total: number) => (total > 0 ? 100 / total : 0);

  /**
   * Transform a list with alternating colors and calculated probabilities.
   * @param {Array} items - List of minimal objects with an `id` property.
   * @returns {Array} - Transformed items.
   */
  const transformItems = (items: Array<{ id: number }>) => {
    const probability = calculateProbability(items.length);
    return items.map((item) => ({
      ...getAlternatingColors(item.id),
      probability,
      ...item,
    }));
  };

  /**
   * Transform a list of categories with alternating colors and calculated probabilities.
   * @param {Array} categories - List of minimal category objects.
   * @returns {Array} - Transformed categories.
   */
  const transformCategories = (categories: Array<{ id: number }>) =>
    transformItems(categories);

  /**
   * Transform a list of challenges with alternating colors and calculated probabilities.
   * @param {Array} challenges - List of minimal challenge objects.
   * @returns {Array} - Transformed challenges.
   */
  const transformChallenges = (challenges: Array<{ id: number }>) =>
    transformItems(challenges);

  return { transformCategories, transformChallenges };
};