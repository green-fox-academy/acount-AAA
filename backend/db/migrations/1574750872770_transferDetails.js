module.exports = {
  up: 'INSERT INTO transferDetails(transferAmount, fromUserId, fromDepositId, toUserId, toDepositId, status) '
    + 'VALUES '
    + '( 150, 123, 1, 456, 4, "pending"), '
    + '( 150, 123, 3,456, 6, "pending"), '
    + '( 150, 456, 5, 789, 8, "pending"), '
    + '( 90, 789, 9, 456, 5, "pending"), '
    + '( 150, 456, 5, 456, 5, "pending"), '
    + '( 150, 456, 5, 123, 2, "pending"), '
    + '( 100, 456, 4, 456, 5, "done");',
  down: 'TRUNCATE TABLE transferDetails;',
};
