namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class priceDiffNullable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Variants", "Price_Diff", c => c.Decimal(precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Variants", "Price_Diff", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
