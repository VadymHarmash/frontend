import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors.ts';

const buttonWidth = Dimensions.get('window').width - 20;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 10,
    paddingBottom: 550,
  },
  addButton: {
    backgroundColor: COLORS.accent,
    width: buttonWidth,
    borderRadius: 12,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: COLORS.textAccent,
    fontSize: 16,
    lineHeight: 30,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyListText: {
    fontSize: 18,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
