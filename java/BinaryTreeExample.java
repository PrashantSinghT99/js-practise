class TreeNode {
    int val;
    TreeNode left, right;

    public TreeNode(int val) {
        this.val = val;
        this.left = this.right = null;
    }
}

public class BinaryTreeExample {
    public static void main(String[] args) {
        // Create nodes for the binary tree
        TreeNode root = new TreeNode(1);
        TreeNode leftChild = new TreeNode(2);
        TreeNode rightChild = new TreeNode(3);
        TreeNode leftGrandchild = new TreeNode(4);
        TreeNode rightGrandchild = new TreeNode(5);

        // Connect the nodes to form a binary tree
        root.left = leftChild;
        root.right = rightChild;
        leftChild.left = leftGrandchild;
        leftChild.right = rightGrandchild;

        // Print the values of the binary tree
        System.out.println("Binary Tree Values:");
        printTree(root);
    }

    private static void printTree(TreeNode root) {
        if (root != null) {
            System.out.print(root.val + " ");
            printTree(root.left);
            printTree(root.right);
        }
    }
}
