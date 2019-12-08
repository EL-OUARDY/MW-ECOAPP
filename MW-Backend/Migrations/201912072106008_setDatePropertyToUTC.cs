namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class setDatePropertyToUTC : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Products", "Last_Update");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Last_Update", c => c.DateTimeOffset(precision: 7));
        }
    }
}
