interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
export type InorderTraversal<T extends TreeNode | null> = any
