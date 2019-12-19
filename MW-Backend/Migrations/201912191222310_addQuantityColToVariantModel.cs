namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addQuantityColToVariantModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Variants", "Quantity", c => c.Int());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Variants", "Quantity");
        }
    }
}
