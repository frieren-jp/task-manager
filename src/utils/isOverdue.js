export default function isOverdue(deadline) {
  return deadline && new Date(deadline) < new Date();
}